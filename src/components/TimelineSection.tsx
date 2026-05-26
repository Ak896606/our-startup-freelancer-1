import React from 'react';
import { TIMELINE } from '../data';
import { CalendarClock, Zap, CheckCircle2, Milestone } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-20 scroll-mt-20">
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-cyber-pink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism text-xs font-bold text-cyber-purple tracking-widest uppercase mb-4 border-cyber-purple/30 bg-cyber-purple/10">
            <CalendarClock className="w-3.5 h-3.5 animate-pulse" />
            TIMELINE MATRIX
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The Battle <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">Chronology</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#94a3b8] font-normal">
            Follow the checkpoints to stay synchronized with the ticking clock of India's biggest Student Hackathon.
          </p>
        </div>

        {/* Timeline Path Node Loop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central glowing core line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-purple via-cyber-pink to-cyber-blue shadow-lg opacity-40"></div>

          <div className="space-y-12">
            {TIMELINE.map((step, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = step.status === 'current';
              const isUpcoming = step.status === 'upcoming';
              const isPast = step.status === 'past';

              return (
                <div 
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing vertical node center dot */}
                  <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative h-[20px] w-[20px] flex items-center justify-center">
                      {isCurrent ? (
                        <>
                          <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-cyber-pink opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff007f] shadow-[0_0_12px_#ff007f]"></span>
                        </>
                      ) : isPast ? (
                        <CheckCircle2 className="w-5 h-5 text-cyber-blue bg-cyber-bg rounded-full z-10" />
                      ) : (
                        <div className="h-3 w-3 rounded-full bg-white/20 border-2 border-white/40 bg-cyber-bg z-10"></div>
                      )}
                    </div>
                  </div>

                  {/* Glassmorphism Timeline Content Card */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div 
                      className={`relative rounded-2xl glassmorphism p-6 sm:p-8 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group ${
                        isCurrent 
                          ? 'border-cyber-pink/30 shadow-[0_0_20px_rgba(255,0,127,0.08)] bg-gradient-to-br from-[#0c051a] to-[#250015]' 
                          : 'border-white/5'
                      }`}
                    >
                      {/* Active tag badge */}
                      {isCurrent && (
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest text-[#ff007f] uppercase bg-[#ff007f]/10 border border-[#ff007f]/20 font-mono">
                          ACTIVE PHASE
                        </span>
                      )}

                      {/* Step date */}
                      <span className={`inline-block font-mono text-xs font-bold tracking-wider uppercase mb-2 ${
                        isCurrent ? 'text-cyber-pink' : isPast ? 'text-cyber-blue' : 'text-white/40'
                      }`}>
                        {step.date}
                      </span>

                      {/* Step details */}
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-cyber-blue transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-white/50 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer helper for full-desktop side empty balancing */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
