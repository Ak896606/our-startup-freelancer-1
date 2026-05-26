import React from 'react';
import { TRACKS } from '../data';
import * as Icons from 'lucide-react';
import { Sparkles, Milestone, ArrowUpRight } from 'lucide-react';

export default function ChallengeTracksSection() {
  return (
    <section id="tracks" className="relative py-20 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-cyber-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism text-xs font-bold text-cyber-blue tracking-widest uppercase mb-4 border-cyber-blue/30 bg-cyber-blue/10">
            <Sparkles className="w-3.5 h-3.5" />
            INNOVATION DOMAINS
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-[#ec4899]">Hackathon Tracks</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/50 font-normal">
            Select a specialized track to build your project. Tackle real-world problems with cutting-edge tech or innovate with complete structural freedom.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRACKS.map((track) => {
            const IconComponent = (Icons as any)[track.iconName] || Icons.Code;
            
            return (
              <div
                key={track.id}
                className="relative group rounded-2xl glassmorphism p-6 sm:p-8 flex flex-col justify-between overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: `0 0 30px rgba(0,0,0,0.4)`
                }}
              >
                {/* Dynamic colored corner light spot */}
                <div 
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: track.color }}
                ></div>

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Glowing Track Icon */}
                    <div 
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        boxShadow: `0 0 15px rgba(255,255,255,0.02)`
                      }}
                    >
                      <IconComponent 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: track.color }}
                      />
                    </div>

                    {/* Prize pool badge */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-white/40 tracking-wider font-mono">PRIZE POOL</span>
                      <span className="text-sm font-extrabold text-white font-mono tracking-tight flex items-center gap-1">
                        <span className="text-xs font-normal" style={{ color: track.color }}>INR</span> {track.prizePool}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                    {track.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-normal mb-6">
                    {track.description}
                  </p>
                </div>

                {/* Card Action footer button - redirects to login */}
                <div className="mt-auto">
                  <a
                    href="https://osfhackathon.in/login"
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      Hack Track
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                {/* Left vertical border light strip */}
                <div 
                  className="absolute top-0 bottom-0 left-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                  style={{ backgroundColor: track.color }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Explore Challenges Bottom callout banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white/40 leading-relaxed mb-4">
            Looking for resources, detailed documentation and mentor rules?
          </p>
          <a
            href="https://osfhackathon.in/login"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyber-blue/20 bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue font-extrabold text-xs uppercase tracking-widest transition duration-200 group"
          >
            Explore Complete Challenges
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
        
      </div>
    </section>
  );
}
