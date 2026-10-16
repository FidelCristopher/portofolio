"use client";

import React, { useEffect, useRef } from "react";

export function CodingBannerCanvas() {
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

    // Characters & code tokens
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
    const fontSize = 13;
    const columns = Math.floor(width / 22);
    const drops: { y: number; speed: number; word: string; wordIdx: number; isKeyword: boolean }[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -50,
        speed: 0.8 + Math.random() * 1.6,
        word: codeWords[Math.floor(Math.random() * codeWords.length)],
        wordIdx: 0,
        isKeyword: Math.random() > 0.4
      };
    }

    // Cursor tracking
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
      // Dark trail fade effect
      ctx.fillStyle = "rgba(5, 5, 8, 0.22)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-mono, 'GeistMono', monospace)`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * 22 + 4;
        const y = drop.y * fontSize;

        // Choose character or snippet piece
        let charToDraw = "";
        if (drop.isKeyword && drop.word) {
          charToDraw = drop.word[drop.wordIdx % drop.word.length];
          drop.wordIdx++;
        } else {
          charToDraw = chars[Math.floor(Math.random() * chars.length)];
        }

        // Distance to cursor
        const distToMouse = Math.hypot(x - mouseX, y - mouseY);
        const isHovered = distToMouse < 65;

        // Colors
        if (isHovered) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 10;
        } else if (drop.isKeyword) {
          ctx.fillStyle = drop.y % 2 === 0 ? "#10b981" : "#34d399";
          ctx.shadowColor = "#10b981";
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = "rgba(16, 185, 129, 0.55)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(charToDraw, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Move down
        drop.y += drop.speed;

        // Reset to top when off-screen
        if (drop.y * fontSize > height && Math.random() > 0.96) {
          drop.y = 0;
          drop.word = codeWords[Math.floor(Math.random() * codeWords.length)];
          drop.wordIdx = 0;
          drop.isKeyword = Math.random() > 0.35;
          drop.speed = 0.8 + Math.random() * 1.5;
        }
      }

      // Draw faint floating terminal prompt cursor on the bottom-right
      ctx.fillStyle = "rgba(52, 211, 153, 0.45)";
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
      className="absolute inset-0 size-full select-none pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
