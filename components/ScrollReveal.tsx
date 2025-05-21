"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, MotionProps } from "framer-motion";

interface ScrollRevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  ...rest
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  const MotionTag: any = motion(as as any);

  return (
    <MotionTag ref={ref} initial="hidden" animate={controls} variants={variants} className={className} {...rest}>
      {children}
    </MotionTag>
  );
}
