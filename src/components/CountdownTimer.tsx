import React, { useState, useEffect } from 'react';
import { TimeRemaining } from '../types';

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const timeSegments = [
    { label: 'DAYS', value: timeRemaining.days, color: 'text-cyber-purple border-cyber-purple/20' },
    { label: 'HOURS', value: timeRemaining.hours, color: 'text-cyber-blue border-cyber-blue/20' },
    { label: 'MINUTES', value: timeRemaining.minutes, color: 'text-cyber-purple border-cyber-purple/20' },
    { label: 'SECONDS', value: timeRemaining.seconds, color: 'text-cyber-blue border-cyber-blue/20', isTicker: true },
  ];

  if (isLive) {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glassmorphism text-emerald-400 font-bold tracking-widest text-sm uppercase glow-blue border-emerald-500/30">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        Hacking Arena is Live Now
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center sm:items-start gap-3 w-full">
      <div className="flex items-center gap-2 text-white/50 font-mono text-xs tracking-widest uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        BATTLE BEGINS IN
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3">
        {timeSegments.map((seg, i) => (
          <div key={seg.label} className="flex items-center">
            {/* Countdown Box */}
            <div className={`relative flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl glassmorphism border ${seg.color} overflow-hidden group hover:border-white/20 transition-all duration-300`}>
              {/* Subtle grid accent inside boxes */}
              <div className="absolute inset-0 cyber-grid opacity-[0.03]"></div>
              
              {/* Box value element */}
              <span className={`text-xl sm:text-2xl font-black tracking-tight ${seg.color} font-mono z-10 transition-transform duration-300 group-hover:scale-105`}>
                {padZero(seg.value)}
              </span>
              
              {/* Box Label */}
              <span className="text-[9px] sm:text-[10px] font-bold text-white/40 tracking-wider font-sans z-10 select-none">
                {seg.label}
              </span>

              {/* Glowing decorative indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30"></div>
            </div>

            {/* Separator dots except for last item */}
            {i < timeSegments.length - 1 && (
              <span className="text-white/20 font-black text-lg sm:text-xl pl-2 sm:pl-3 select-none animate-pulse">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
