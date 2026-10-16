"use client";

import React, { useEffect, useRef, useState } from "react";

const CHARS = ["·", ":", "0", "1", "3", "5", "8", "9", "X", "B", "#", "0x", "88", "00", "8888"];

interface ZickrianBannerCanvasProps {
  src?: string;
  alt?: string;
  className?: string;
  cellWidth?: number;
  cellHeight?: number;
  speed?: number;
  scanlines?: boolean;
}

export function ZickrianBannerCanvas({
  src = "/bannerfield.webp",
  alt = "Profile Banner",
  className = "",
  cellWidth = 7,
  cellHeight = 10,
  speed = 0.4,
  scanlines = true
}: ZickrianBannerCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new window.Image();
    img.src = src;

    let isDisposed = false;
    let animId = 0;
    let lastTime = performance.now();
    let animTime = 0;
    let isVisible = true;
    let cols = 0;
    let rows = 0;
    let clientW = 0;
    let clientH = 0;
    let dpr = 1;
    let imgData: Uint8ClampedArray | null = null;

    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });

    const updateImageData = () => {
      if (!offCtx || cols <= 0 || rows <= 0 || !img.naturalWidth) return;
      try {
        offCanvas.width = cols;
        offCanvas.height = rows;

        const imgAspect = img.naturalWidth / img.naturalHeight;
        const containerAspect = (clientW || 720) / (clientH || 224);
        let drawW = cols;
        let drawH = rows;
        let offsetX = 0;
        let offsetY = 0;

        if (imgAspect > containerAspect) {
          drawW = rows * imgAspect;
          offsetX = -(drawW - cols) / 2;
        } else {
          drawH = cols / imgAspect;
          offsetY = -(0.4 * (drawH - rows));
        }

        offCtx.clearRect(0, 0, cols, rows);
        offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
        imgData = offCtx.getImageData(0, 0, cols, rows).data;
        setReady(true);
      } catch {
        imgData = null;
      }
    };

    const handleResize = () => {
      if (!container || !canvas) return;
      clientW = container.clientWidth || 720;
      clientH = container.clientHeight || 224;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(clientW * dpr);
      canvas.height = Math.floor(clientH * dpr);
      canvas.style.width = `${clientW}px`;
      canvas.style.height = `${clientH}px`;

      cols = Math.ceil(clientW / cellWidth);
      rows = Math.ceil(clientH / cellHeight);

      if (img.complete && img.naturalWidth > 0) {
        updateImageData();
      }
    };

    const drawFrame = (currentTime: number) => {
      if (!ctx || !imgData || cols <= 0 || rows <= 0) return;

      const delta = Math.min(currentTime - lastTime, 50) / 1000;
      lastTime = currentTime;
      animTime += delta * speed;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, clientW, clientH);
      ctx.font = '600 7.5px "GeistMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const timeVal = animTime;
      const dataLen = imgData.length;

      for (let r = 0; r < rows; r++) {
        const posY = Math.round(r * cellHeight + cellHeight / 2);

        for (let c = 0; c < cols; c++) {
          const idx = (r * cols + c) * 4;
          if (idx + 3 >= dataLen) continue;

          const red = imgData[idx] ?? 0;
          const green = imgData[idx + 1] ?? 0;
          const blue = imgData[idx + 2] ?? 0;
          const alpha = imgData[idx + 3] ?? 0;
          if (alpha === 0) continue;

          // Perceived luminance
          const lum = 0.299 * red + 0.587 * green + 0.114 * blue;
          if (lum < 100) continue; // Thresholding matching zickrian.dev

          // Mathematical wave shimmer
          const wave = 1.5 * Math.sin(0.12 * c + 1.5 * timeVal) + 1.5 * Math.cos(0.25 * r - 1.2 * timeVal);
          const normLum = Math.min(1, Math.max(0, (lum - 100) / 155));

          // Blinking character cycle
          const charIndex = Math.abs(Math.floor(3 * c + 7 * r + wave + 4 * timeVal)) % (Math.min(CHARS.length - 1, Math.floor(normLum * CHARS.length)) + 1);
          const charToRender = CHARS[charIndex] ?? "0";
          const posX = Math.round(c * cellWidth + cellWidth / 2);

          // Color calculation
          const isWarm = red > 120 && green > 110 && blue < 155;
          const isCool = blue > red + 10;
          const boost = Math.min(1.25, lum / 160 + 0.2);

          const finalR = Math.min(255, Math.floor(red * boost + (isWarm ? 30 : 20 * (isCool ? 0 : 1))));
          const finalG = Math.min(255, Math.floor(green * boost + (isWarm || isCool ? 25 : 20)));
          const finalB = Math.min(255, Math.floor(blue * boost + (isWarm ? 0 : isCool ? 35 : 20)));
          const finalAlpha = Math.min(0.85, 0.6 * normLum + 0.2);

          ctx.fillStyle = `rgba(${finalR}, ${finalG}, ${finalB}, ${finalAlpha})`;
          ctx.fillText(charToRender, posX, posY);
        }
      }

      ctx.restore();
    };

    const loop = (time: number) => {
      animId = 0;
      if (isVisible && !document.hidden) {
        drawFrame(time);
        animId = requestAnimationFrame(loop);
      }
    };

    const startAnimation = () => {
      if (!animId && isVisible && !document.hidden && !prefersReducedMotion) {
        lastTime = performance.now();
        animId = requestAnimationFrame(loop);
      }
    };

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };

    const onImageLoaded = () => {
      if (isDisposed) return;
      handleResize();
      updateImageData();
      if (prefersReducedMotion) {
        drawFrame(0);
      } else {
        startAnimation();
      }
    };

    img.onload = onImageLoaded;
    if (img.complete && img.naturalWidth > 0) {
      onImageLoaded();
    }
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
      if (prefersReducedMotion) drawFrame(performance.now());
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? false;
      if (isVisible) startAnimation();
      else stopAnimation();
    });
    intersectionObserver.observe(container);

    const handleVisibility = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      isDisposed = true;
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [src, cellWidth, cellHeight, speed]);

  return (
    <div ref={containerRef} className={`relative size-full overflow-hidden bg-black select-none ${className}`}>
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        className="object-cover object-[center_40%] pointer-events-none absolute inset-0 size-full"
        style={{ color: "transparent" }}
      />

      {/* The Exact Shimmering Blinking Numbers Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 size-full transition-opacity duration-300 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* The CRT Scanlines Overlay */}
      {scanlines && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.35)_51%)] bg-[length:100%_3px] opacity-30 mix-blend-overlay"
        />
      )}
    </div>
  );
}
