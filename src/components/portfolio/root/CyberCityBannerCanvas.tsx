"use client";

import React, { useEffect, useRef } from "react";

export function CyberCityBannerCanvas() {
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

    // AI & Engineering Code Snippets
    const codeWords = [
      "import torch",
      "model = YOLOv8()",
      "def forward(x):",
      "cv2.Canny()",
      "1D-CNN",
      "Seq2Seq",
      "FastAPI",
      "optimizer.step()",
      "word_tokenize()",
      "Word2Vec",
      "010110",
      "Bio.Seq('ATCG')",
      "loss.backward()",
      "async/await",
      "C++23",
      "Librosa.stft()",
      "Figma.prototype()",
      "return tensor",
      "while True:",
      "git push origin"
    ];

    const chars = "01010101abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{}<>/=+-*#;:_";
    const fontSize = 12;
    const columns = Math.floor(width / 24);
    const drops: { y: number; speed: number; word: string; wordIdx: number; isKeyword: boolean }[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -60,
        speed: 0.7 + Math.random() * 1.5,
        word: codeWords[Math.floor(Math.random() * codeWords.length)],
        wordIdx: 0,
        isKeyword: Math.random() > 0.35
      };
    }

    // Cursor tracking for interactive glow
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
      // Semi-transparent clear to leave soft fading code trails over the city
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-mono, 'GeistMono', monospace)`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * 24 + 6;
        const y = drop.y * fontSize;

        let charToDraw = "";
        if (drop.isKeyword && drop.word) {
          charToDraw = drop.word[drop.wordIdx % drop.word.length];
          drop.wordIdx++;
        } else {
          charToDraw = chars[Math.floor(Math.random() * chars.length)];
        }

        // Proximity to cursor
        const distToMouse = Math.hypot(x - mouseX, y - mouseY);
        const isHovered = distToMouse < 70;

        ctx.save();
        if (isHovered) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 12;
        } else if (drop.isKeyword) {
          // Cyber cyan & emerald neon alternating
          ctx.fillStyle = drop.y % 2 === 0 ? "#22d3ee" : "#34d399";
          ctx.shadowColor = "#06b6d4";
          ctx.shadowBlur = 7;
        } else {
          ctx.fillStyle = "rgba(45, 212, 191, 0.45)"; // Subtle cyan-green glow
          ctx.shadowBlur = 0;
        }

        ctx.fillText(charToDraw, x, y);
        ctx.restore();

        // Increment position
        drop.y += drop.speed;

        // Reset when passing bottom
        if (drop.y * fontSize > height && Math.random() > 0.95) {
          drop.y = 0;
          drop.word = codeWords[Math.floor(Math.random() * codeWords.length)];
          drop.wordIdx = 0;
          drop.isKeyword = Math.random() > 0.35;
          drop.speed = 0.7 + Math.random() * 1.5;
        }
      }

      // Terminal prompt in the bottom corner
      ctx.fillStyle = "rgba(45, 212, 191, 0.5)";
      ctx.font = "11px var(--font-mono, monospace)";
      ctx.fillText(">_ fidel@dev:~/ai-portfolio$", 16, height - 14);

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
