import * as THREE from 'three';

export class RoundedPlaneGeometry extends THREE.BufferGeometry {
  constructor(width = 1, height = 1, radius = 0.1, segments = 8) {
    super();

    const ctx = new Path2D();
    const w = width / 2;
    const h = height / 2;
    const r = Math.min(radius, w, h);

    ctx.moveTo(-w + r, -h);
    ctx.lineTo(w - r, -h);
    ctx.arc(w - r, -h + r, r, -Math.PI / 2, 0, false);
    ctx.lineTo(w, h - r);
    ctx.arc(w - r, h - r, r, 0, Math.PI / 2, false);
    ctx.lineTo(-w + r, h);
    ctx.arc(-w + r, h - r, r, Math.PI / 2, Math.PI, false);
    ctx.lineTo(-w, -h + r);
    ctx.arc(-w + r, -h + r, r, Math.PI, (3 * Math.PI) / 2, false);
    ctx.closePath();

    // Build triangulation manually since Path2D doesn't give us vertices directly
    const indices: number[] = [];

    // Create a grid and test if points are inside the rounded rect
    const resX = Math.ceil(segments * (width / Math.min(width, height)));
    const resY = Math.ceil(segments * (height / Math.min(width, height)));

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx2d = canvas.getContext('2d')!;

    ctx2d.beginPath();
    ctx2d.moveTo(128 + (-w + r) * (128 / w), 128 + (-h) * (128 / h));
    ctx2d.lineTo(128 + (w - r) * (128 / w), 128 + (-h) * (128 / h));
    ctx2d.arc(128 + (w - r) * (128 / w), 128 + (-h + r) * (128 / h), r * (128 / w), -Math.PI / 2, 0);
    ctx2d.lineTo(128 + w * (128 / w), 128 + (h - r) * (128 / h));
    ctx2d.arc(128 + (w - r) * (128 / w), 128 + (h - r) * (128 / h), r * (128 / w), 0, Math.PI / 2);
    ctx2d.lineTo(128 + (-w + r) * (128 / w), 128 + h * (128 / h));
    ctx2d.arc(128 + (-w + r) * (128 / w), 128 + (h - r) * (128 / h), r * (128 / w), Math.PI / 2, Math.PI);
    ctx2d.lineTo(128 + (-w) * (128 / w), 128 + (-h + r) * (128 / h));
    ctx2d.arc(128 + (-w + r) * (128 / w), 128 + (-h + r) * (128 / h), r * (128 / w), Math.PI, 3 * Math.PI / 2);
    ctx2d.closePath();
    ctx2d.fill();

    const imageData = ctx2d.getImageData(0, 0, 256, 256);

    const vertexMap: Map<string, number> = new Map();
    const verts: { x: number; y: number; z: number; u: number; v: number }[] = [];

    function getVert(x: number, y: number, u: number, v: number): number {
      const key = `${x.toFixed(4)},${y.toFixed(4)}`;
      if (vertexMap.has(key)) return vertexMap.get(key)!;
      const idx = verts.length;
      verts.push({ x, y, z: 0, u, v });
      vertexMap.set(key, idx);
      return idx;
    }

    for (let iy = 0; iy < resY; iy++) {
      for (let ix = 0; ix < resX; ix++) {
        const x0 = -w + (ix / resX) * width;
        const y0 = -h + (iy / resY) * height;
        const x1 = -w + ((ix + 1) / resX) * width;
        const y1 = -h + ((iy + 1) / resY) * height;

        const px0 = Math.floor(128 + x0 * (128 / w));
        const py0 = Math.floor(128 + y0 * (128 / h));
        const px1 = Math.floor(128 + x1 * (128 / w));
        const py1 = Math.floor(128 + y1 * (128 / h));

        const inside00 = px0 >= 0 && px0 < 256 && py0 >= 0 && py0 < 256 && imageData.data[(py0 * 256 + px0) * 4 + 3] > 128;
        const inside10 = px1 >= 0 && px1 < 256 && py0 >= 0 && py0 < 256 && imageData.data[(py0 * 256 + px1) * 4 + 3] > 128;
        const inside01 = px0 >= 0 && px0 < 256 && py1 >= 0 && py1 < 256 && imageData.data[(py1 * 256 + px0) * 4 + 3] > 128;
        const inside11 = px1 >= 0 && px1 < 256 && py1 >= 0 && py1 < 256 && imageData.data[(py1 * 256 + px1) * 4 + 3] > 128;

        // Only add quads where at least some corners are inside
        if (inside00 || inside10 || inside01 || inside11) {
          const u0 = ix / resX;
          const v0 = iy / resY;
          const u1 = (ix + 1) / resX;
          const v1 = (iy + 1) / resY;

          const i00 = getVert(x0, y0, u0, v0);
          const i10 = getVert(x1, y0, u1, v0);
          const i01 = getVert(x0, y1, u0, v1);
          const i11 = getVert(x1, y1, u1, v1);

          indices.push(i00, i10, i01);
          indices.push(i10, i11, i01);
        }
      }
    }

    const positionArray = new Float32Array(verts.length * 3);
    const uvArray = new Float32Array(verts.length * 2);

    for (let i = 0; i < verts.length; i++) {
      positionArray[i * 3] = verts[i].x;
      positionArray[i * 3 + 1] = verts[i].y;
      positionArray[i * 3 + 2] = verts[i].z;
      uvArray[i * 2] = verts[i].u;
      uvArray[i * 2 + 1] = verts[i].v;
    }

    this.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    this.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
    this.setIndex(indices);
    this.computeVertexNormals();
  }
}
