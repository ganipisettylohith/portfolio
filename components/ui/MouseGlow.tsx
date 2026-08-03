"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    setMounted(true);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175); // center offset (width / 2)
      mouseY.set(e.clientY - 175); // center offset (height / 2)
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || reducedMotion) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        width: 350,
        height: 350,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "screen",
        background: "radial-gradient(circle, rgba(199, 98, 43, 0.05) 0%, rgba(47, 110, 92, 0.05) 50%, rgba(0,0,0,0) 100%)",
        filter: "blur(20px)",
      }}
    />
  );
}
