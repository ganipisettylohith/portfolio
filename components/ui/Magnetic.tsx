"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export default function Magnetic({ children, range = 100, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Check if mouse is within range of the button
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Clones the child to apply ref and event handlers
  return React.cloneElement(children, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      ...children.props.style,
      x: springX,
      y: springY,
    },
  });
}
