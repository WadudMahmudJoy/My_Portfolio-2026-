'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
};

const NODE_COUNT = 54;
const DEPTH = 820;

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;

    const nodes: NodePoint[] = Array.from({ length: NODE_COUNT }, () => ({
      x: (Math.random() - 0.5) * 560,
      y: (Math.random() - 0.5) * 340,
      z: Math.random() * DEPTH,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      vz: Math.random() * 0.9 + 0.2
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, width, height);

      const projected = nodes.map((node) => {
        node.x += node.vx + pointerX * 0.22;
        node.y += node.vy + pointerY * 0.16;
        node.z -= node.vz;

        if (node.z < 40) node.z = DEPTH;
        if (Math.abs(node.x) > 320) node.vx *= -1;
        if (Math.abs(node.y) > 220) node.vy *= -1;

        const scale = 520 / (node.z + 240);
        const px = width / 2 + node.x * scale;
        const py = height / 2 + node.y * scale;
        const radius = Math.max(1.1, scale * 6.4);
        return { px, py, radius, depth: node.z };
      });

      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j += 1) {
          const b = projected[j];
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const distance = Math.hypot(dx, dy);
          if (distance < 130) {
            const alpha = 1 - distance / 130;
            ctx.strokeStyle = `rgba(92, 246, 255, ${alpha * 0.22})`;
            ctx.lineWidth = alpha * 1.4;
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      projected.forEach((point) => {
        const glow = ctx.createRadialGradient(point.px, point.py, 0, point.px, point.py, point.radius * 6);
        glow.addColorStop(0, 'rgba(96, 165, 250, 0.9)');
        glow.addColorStop(0.6, 'rgba(45, 212, 191, 0.18)');
        glow.addColorStop(1, 'rgba(45, 212, 191, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(point.px, point.py, point.radius * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(226, 232, 240, 0.95)';
        ctx.beginPath();
        ctx.arc(point.px, point.py, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-scene" aria-hidden="true" />;
}
