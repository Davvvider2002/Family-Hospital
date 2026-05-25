import * as THREE from 'three';
import type { Review } from '@/data/reviews';

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, x, currentY);
      line = words[i] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
  return currentY;
}

export function createCardTexture(review: Review): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 700;
  const ctx = canvas.getContext('2d')!;

  // White background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 512, 700);

  // Patient name
  ctx.fillStyle = '#1D2D35';
  ctx.font = 'bold 32px Arial';
  ctx.fillText(review.name, 32, 60);

  // Gold underline
  ctx.fillStyle = '#E9C46A';
  ctx.shadowBlur = 0;
  ctx.fillRect(32, 78, 120, 4);

  // Review text (wrapped)
  ctx.font = '24px Arial';
  ctx.fillStyle = '#1D2D35';
  wrapText(ctx, review.text, 32, 130, 280, 36);

  // Stars
  const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  ctx.font = '28px Arial';
  ctx.fillStyle = '#E9C46A';
  ctx.fillText(stars, 32, 580);

  // Date
  ctx.fillStyle = '#5C6B73';
  ctx.font = '20px Arial';
  ctx.fillText(review.date, 32, 620);

  // Teal bottom accent
  ctx.fillStyle = '#2A9D8F';
  ctx.fillRect(0, 690, 512, 10);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
