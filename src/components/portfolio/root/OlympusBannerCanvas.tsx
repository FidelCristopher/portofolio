"use client";

import React, { useEffect, useRef } from "react";

export function OlympusBannerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 720);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 224);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Celestial stardust particles & divine motes
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: -(0.2 + Math.random() * 0.45),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.7 + 0.2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      angle: Math.random() * Math.PI * 2,
      isGolden: Math.random() > 0.45
    }));

    // Mouse position for subtle interaction
    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle gently upwards
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.angle) * 0.2;
        p.angle += 0.02;

        // Wrap around top to bottom
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Pulse opacity
        const currentOpacity = Math.abs(Math.sin(p.angle)) * p.opacity;

        // Check cursor proximity
        const distToMouse = Math.hypot(p.x - mouseX, p.y - mouseY);
        const isNearCursor = distToMouse < 70;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, isNearCursor ? p.size * 1.6 : p.size, 0, Math.PI * 2);

        if (isNearCursor) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#fef08a";
          ctx.shadowBlur = 10;
        } else if (p.isGolden) {
          ctx.fillStyle = `rgba(254, 240, 138, ${currentOpacity})`; // Golden celestial mote
          ctx.shadowColor = "rgba(250, 204, 21, 0.4)";
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`; // Ethereal white mote
          ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 3;
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full pointer-events-auto z-15"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
