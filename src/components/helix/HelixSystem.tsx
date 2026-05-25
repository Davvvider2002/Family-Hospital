import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { reviews } from '@/data/reviews';
import { RoundedPlaneGeometry } from './RoundedPlaneGeometry';
import { createCardTexture } from './cardTexture';

const RADIUS = 4;
const Y_SPACING = 1.4;
const CARDS_PER_LOOP = 16;
const CARD_WIDTH = 2;
const CARD_HEIGHT = 2.8;
const CARD_RADIUS = 0.12;

// Shared scroll offset managed outside React
const globalScrollOffset = { value: 0 };

function HelixMesh() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const rotationOffsetRef = useRef(0);

  const { initialMatrices, phaseOffsets, geometry, material } = useMemo(() => {
    const totalCards = reviews.length;
    const loops = totalCards / CARDS_PER_LOOP;

    const initialMatrices: THREE.Matrix4[] = [];
    const phaseOffsets: number[] = [];

    for (let i = 0; i < totalCards; i++) {
      const t = i / CARDS_PER_LOOP;
      const angle = t * Math.PI * 2;
      const y = (t * Y_SPACING * CARDS_PER_LOOP) - ((loops * Y_SPACING * CARDS_PER_LOOP) / 2);

      let x: number;
      let z: number;
      let phaseOffset: number;

      if (i % 2 === 0) {
        x = Math.cos(angle) * RADIUS;
        z = Math.sin(angle) * RADIUS;
        phaseOffset = 0;
      } else {
        x = Math.cos(angle + Math.PI) * RADIUS;
        z = Math.sin(angle + Math.PI) * RADIUS;
        phaseOffset = Math.PI;
      }

      const pos = new THREE.Vector3(x, y, z);
      const matrix = new THREE.Matrix4();
      matrix.makeRotationY(-angle - phaseOffset);
      matrix.setPosition(pos);

      initialMatrices.push(matrix);
      phaseOffsets.push(phaseOffset);
    }

    const geo = new RoundedPlaneGeometry(CARD_WIDTH, CARD_HEIGHT, CARD_RADIUS, 8);

    const texture = createCardTexture(reviews[0]);
    texture.colorSpace = THREE.SRGBColorSpace;

    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });

    return { initialMatrices, phaseOffsets, geometry: geo, material: mat };
  }, []);

  const tempMatrix = useMemo(() => new THREE.Matrix4(), []);
  const tempQuat = useMemo(() => new THREE.Quaternion(), []);
  const newColor = useMemo(() => new THREE.Color(), []);
  const newScale = useMemo(() => new THREE.Vector3(), []);
  const translation = useMemo(() => new THREE.Vector3(), []);
  const oldScale = useMemo(() => new THREE.Vector3(), []);
  const cardForward = useMemo(() => new THREE.Vector3(), []);
  const toCamera = useMemo(() => new THREE.Vector3(), []);
  const worldCameraPos = useMemo(() => new THREE.Vector3(), []);
  const groupWorldPos = useMemo(() => new THREE.Vector3(), []);
  const cameraQuat = useMemo(() => new THREE.Quaternion(), []);
  const cameraScale = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth interpolation
    rotationOffsetRef.current += (globalScrollOffset.value - rotationOffsetRef.current) * 5 * delta;

    const totalCards = reviews.length;

    for (let i = 0; i < totalCards; i++) {
      const baseMatrix = initialMatrices[i];
      const phase = phaseOffsets[i];

      const dynamicAngle = rotationOffsetRef.current * 0.4 + phase;

      let newX: number;
      let newZ: number;

      if (i % 2 === 0) {
        newX = Math.cos(dynamicAngle) * 4;
        newZ = Math.sin(dynamicAngle) * 4;
      } else {
        newX = Math.cos(dynamicAngle + Math.PI) * 4;
        newZ = Math.sin(dynamicAngle + Math.PI) * 4;
      }

      // Build orientation matrix
      const orientMatrix = new THREE.Matrix4();
      if (i % 2 === 0) {
        orientMatrix.makeRotationY(-dynamicAngle);
      } else {
        orientMatrix.makeRotationY(-dynamicAngle - Math.PI);
      }

      orientMatrix.setPosition(newX, baseMatrix.elements[13], newZ);

      meshRef.current.setMatrixAt(i, orientMatrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    // Backface detection
    state.camera.matrixWorld.decompose(worldCameraPos, cameraQuat, cameraScale);

    groupWorldPos.set(0, 0, 0);
    if (groupRef.current) {
      groupRef.current.getWorldPosition(groupWorldPos);
    }

    for (let i = 0; i < totalCards; i++) {
      meshRef.current.getMatrixAt(i, tempMatrix);
      tempMatrix.decompose(translation, tempQuat, oldScale);

      toCamera.copy(worldCameraPos).sub(groupWorldPos).sub(translation).normalize();
      cardForward.set(0, 0, 1).applyQuaternion(tempQuat);

      const dot = toCamera.dot(cardForward);

      if (dot < 0) {
        newColor.set('#2A9D8F');
        newScale.set(0.92, 0.92, 0.92);
      } else {
        newColor.set('#FFFFFF');
        newScale.set(1, 1, 1);
      }

      meshRef.current.setColorAt(i, newColor);

      tempMatrix.compose(translation, tempQuat, newScale);
      meshRef.current.setMatrixAt(i, tempMatrix);
    }

    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, reviews.length]}
        frustumCulled={false}
      />
    </group>
  );
}

export function HelixSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const isMobile = 'ontouchstart' in window;
      const normalizedDelta = e.deltaY * (isMobile ? 0.001 : 0.0005);
      globalScrollOffset.value += normalizedDelta;
      e.preventDefault();
    };

    let lastY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = lastY - e.touches[0].clientY;
      lastY = e.touches[0].clientY;
      globalScrollOffset.value += deltaY * 0.001;
      e.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        touchAction: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#264653']} />
        <HelixMesh />
      </Canvas>
    </div>
  );
}
