"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

export function ReadingProgressBar() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/80 origin-left z-[100]"
      style={{ scaleX }}
    />,
    document.body
  );
}
