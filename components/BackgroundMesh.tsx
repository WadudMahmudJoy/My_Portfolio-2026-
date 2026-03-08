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

const NODE_COUNT = 84;
const DEPTH = 920;

function rgbaFromCss(varName: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return value || fallback;
}

export default function BackgroundMesh() {
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
    let scrollDrift = 0;

    const nodes: NodePoint[] = Array.from({ length: NODE_COUNT }, () => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      z: Math.random() * DEPTH,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: Math.random() * 0.72 + 0.16
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollDrift = window.scrollY * 0.12;
    };

    const draw = () => {
      const lineColor = rgbaFromCss('--mesh-line', 'rgba(102,227,255,0.2)');
      const pointColor = rgbaFromCss('--mesh-point', 'rgba(255,255,255,0.9)');
      const glowColor = rgbaFromCss('--mesh-glow', 'rgba(102,227,255,0.18)');
      const fogColor = rgbaFromCss('--mesh-fog', 'rgba(2,8,23,0.16)');

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = fogColor;
      ctx.fillRect(0, 0, width, height);

      const projected = nodes.map((node) => {
        node.x += node.vx + pointerX * 0.16;
        node.y += node.vy + pointerY * 0.12 + Math.sin(scrollDrift / 120 + node.z / 90) * 0.08;
        node.z -= node.vz;

        if (node.z < 40) node.z = DEPTH;
        if (Math.abs(node.x) > 860) node.vx *= -1;
        if (Math.abs(node.y) > 620) node.vy *= -1;

        const scale = 680 / (node.z + 280);
        const px = width / 2 + node.x * scale;
        const py = height / 2 + node.y * scale + Math.sin(scrollDrift / 180 + node.x / 120) * 10;
        const radius = Math.max(0.8, scale * 5.2);
        return { px, py, radius, depth: node.z };
      });

      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j += 1) {
          const b = projected[j];
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const distance = Math.hypot(dx, dy);
          if (distance < 145) {
            const alpha = 1 - distance / 145;
            ctx.strokeStyle = lineColor.replace(/rgba\(([^)]+),\s*[^)]+\)/, `rgba($1, ${Math.max(0.04, alpha * 0.22)})`);
            ctx.lineWidth = Math.max(0.2, alpha * 1.2);
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      projected.forEach((point) => {
        const glow = ctx.createRadialGradient(point.px, point.py, 0, point.px, point.py, point.radius * 9);
        glow.addColorStop(0, glowColor.replace(/rgba\(([^)]+),\s*[^)]+\)/, 'rgba($1, 0.9)'));
        glow.addColorStop(0.36, glowColor.replace(/rgba\(([^)]+),\s*[^)]+\)/, 'rgba($1, 0.2)'));
        glow.addColorStop(1, glowColor.replace(/rgba\(([^)]+),\s*[^)]+\)/, 'rgba($1, 0)'));
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(point.px, point.py, point.radius * 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = pointColor;
        ctx.beginPath();
        ctx.arc(point.px, point.py, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    handleScroll();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-mesh" aria-hidden="true" />;
}
