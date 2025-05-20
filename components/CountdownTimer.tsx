import { useEffect, useState } from "react";

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

  return <span>{timeLeft}</span>;
}
