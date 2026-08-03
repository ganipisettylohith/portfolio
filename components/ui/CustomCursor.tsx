"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 25 });

  useEffect(() => {
    // Disable on touch devices and prefers-reduced-motion
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".project-card-gsap") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Dynamic Trailing Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 45 : 30,
          height: isHovered ? 45 : 30,
          borderColor: isHovered ? "var(--accent-primary, #C7622B)" : "var(--accent-secondary, #2F6E5C)",
          backgroundColor: isHovered ? "rgba(199, 98, 43, 0.08)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="absolute border border-solid rounded-full"
      />
      {/* Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "var(--accent-primary, #C7622B)" : "var(--accent-secondary, #2F6E5C)",
        }}
        className="absolute w-1.5 h-1.5 rounded-full"
      />
    </div>
  );
}
