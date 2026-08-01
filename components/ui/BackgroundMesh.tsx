"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const meshContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (meshContainerRef.current) {
        const blob1 = meshContainerRef.current.querySelector(".blob-1");
        const blob2 = meshContainerRef.current.querySelector(".blob-2");
        const blob3 = meshContainerRef.current.querySelector(".blob-3");
        const blob4 = meshContainerRef.current.querySelector(".blob-4");

        if (blob1 && blob2 && blob3 && blob4) {
          gsap.to([blob1, blob3], {
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
            scale: 1.25,
            x: 80,
            opacity: 0.95,
          });

          gsap.to([blob2, blob4], {
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
            scale: 1.2,
            y: -70,
            opacity: 0.9,
          });
        }
      }
    },
    { scope: meshContainerRef }
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ["#C7622B", "#2F6E5C", "#D9A441", "#8C4A21", "#3E5C52"];
    const particleCount = Math.min(Math.floor(window.innerWidth / 14), 85);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 3 + 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.55,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 160) * 0.55;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={meshContainerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Base Warm Background (#FAF8F5) */}
      <div className="absolute inset-0 bg-[#FAF8F5]" />

      {/* Dynamic Animated Aurora Blobs with Defined Shapes (blur-2xl) & Warm Color Opacity */}
      <div className="absolute inset-0">
        {/* Blob 1 - Top Left */}
        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="blob-1 absolute -top-20 -left-20 w-[38rem] h-[38rem] rounded-full bg-gradient-to-tr from-[#C7622B]/75 to-[#D9A441]/70 blur-2xl opacity-90"
        />

        {/* Blob 2 - Upper Right */}
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 70, -40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="blob-2 absolute top-[22%] -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#2F6E5C]/75 to-[#C7622B]/70 blur-2xl opacity-90"
        />

        {/* Blob 3 - Center Left */}
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="blob-3 absolute top-[48%] -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-[#D9A441]/75 to-[#2F6E5C]/70 blur-2xl opacity-90"
        />

        {/* Blob 4 - Lower Right */}
        <motion.div
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 50, -60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="blob-4 absolute top-[72%] -right-24 w-[38rem] h-[38rem] rounded-full bg-gradient-to-tl from-[#C7622B]/75 to-[#D9A441]/70 blur-2xl opacity-90"
        />

        {/* Blob 5 - Bottom Center */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="blob-5 absolute bottom-[-5%] left-1/3 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-[#2F6E5C]/75 to-[#C7622B]/70 blur-2xl opacity-85"
        />
      </div>

      {/* Warm Grid Lines Span Consistently Top to Bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfd8cb_1px,transparent_1px),linear-gradient(to_bottom,#dfd8cb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

      {/* HTML5 Canvas Floating Constellation Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-95" />
    </div>
  );
}
