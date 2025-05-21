"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  targetDate: string; // ISO date string
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    function update() {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft("0d 0h 0m 0s");
        return;
      }
      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={timeLeft}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        {timeLeft}
      </motion.span>
    </AnimatePresence>
  );
}
