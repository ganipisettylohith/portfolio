"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;
    setCursorPos({ x: xPct, y: yPct });

    if (isHovered) {
      const xRotPct = mouseX / width - 0.5;
      const yRotPct = mouseY / height - 0.5;
      // rotateX controls up/down tilt (influenced by mouseY)
      // rotateY controls left/right tilt (influenced by mouseX)
      setRotateX(-yRotPct * intensity);
      setRotateY(xRotPct * intensity);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: 1200 }} className={`w-full ${className}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={
          isHovered && !reducedMotion
            ? { rotateX, rotateY, scale: 1.02, translateZ: 15 }
            : { rotateX: 0, rotateY: 0, scale: 1, translateZ: 0 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative overflow-hidden rounded-3xl"
      >
        {/* Soft Cursor-Reactive Spotlight Overlay + Premium Glare Sheen Sweep */}
        {isHovered && !reducedMotion && (
          <>
            <div
              className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(199, 98, 43, 0.08), transparent 80%)`,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 opacity-60 mix-blend-overlay"
              style={{
                background: `radial-gradient(circle 250px at ${cursorPos.x}% ${cursorPos.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`,
              }}
            />
          </>
        )}
        <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
