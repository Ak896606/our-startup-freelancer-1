import React from 'react';
import { STATS } from '../data';
import * as Icons from 'lucide-react';

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0c2d]/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Abstract Horizontal bar decor */}
        <div className="flex items-center justify-between gap-6 mb-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#9d4edd]/20 to-[#00b4d8]/40 flex-1"></div>
          <div className="text-center font-mono text-[11px] tracking-[0.3em] uppercase text-cyber-blue font-bold">
            Live Hackathon Metrics
          </div>
          <div className="h-[1px] bg-gradient-to-l from-transparent via-[#9d4edd]/20 to-[#00b4d8]/40 flex-1"></div>
        </div>

        {/* Bento Grid Stats Card Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => {
            // Dynamically resolve icon from Lucide
            const IconComponent = (Icons as any)[stat.iconName] || Icons.Cpu;
            
            return (
              <div
                key={stat.label}
                className="relative group rounded-2xl glassmorphism p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glowing neon background spots */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-gradient-to-tr from-cyber-purple/10 to-cyber-blue/15 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Top Row with icon and index */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-cyber-purple/20 group-hover:to-cyber-blue/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-cyber-blue group-hover:text-white" />
                  </div>
                  <span className="font-mono text-xs text-white/20 select-none">0{index + 1}</span>
                </div>

                {/* Stat value */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mb-1.5 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/50 tracking-wide">
                    {stat.label}
                  </span>
                </div>

                {/* Underline scanner bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-purple/50 to-cyber-blue/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
