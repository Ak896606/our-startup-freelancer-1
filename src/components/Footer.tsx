import React from 'react';
import OSFLogo from './OSFLogo';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040a] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 mb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollTop(); }} className="cursor-pointer">
              <OSFLogo size="md" showText={true} />
            </a>
            
            <p className="text-sm text-[#94a3b8] leading-relaxed font-normal max-w-sm">
              Our Startup Freelancer is a futuristic tech ecosystem bridging ambitious startup builders with world-class freelance digital creators. 
            </p>

            <p className="text-xs text-white/30 tracking-wide font-mono flex items-center gap-2 mt-2">
              <ShieldCheck className="w-4 h-4 text-cyber-blue" />
              Verified ISO-Integrated Student Hub
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3b82f6]">Hackathon Hub</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#tracks" className="text-sm text-[#94a3b8] hover:text-white transition font-medium">Tracks & Criteria</a>
              <a href="#timeline" className="text-sm text-[#94a3b8] hover:text-white transition font-medium">Process Timeline</a>
              <a href="#faqs" className="text-sm text-[#94a3b8] hover:text-white transition font-medium">FAQ Document</a>
              <a href="https://osfhackathon.in/login" className="text-sm text-[#94a3b8] hover:text-white transition font-medium flex items-center gap-1.5">
                Login Arena <ArrowUpRight className="w-3 h-3 text-white/30" />
              </a>
            </div>
          </div>

          {/* Guidelines Col */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#a855f7]">Portal Directives</h4>
            <p className="text-xs text-white/40 leading-relaxed font-normal max-w-sm mb-2">
              OSF HackOne 2K26 is co-partnered with elite tech platforms across India. To ensure transparent allocations, all commits are tracked live via GitHub.
            </p>
            <a 
              href="https://osfhackathon.in/login"
              className="relative inline-flex items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition duration-200"
            >
              Secure Register Gateway
            </a>
          </div>

        </div>

        {/* Corporate row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Our Startup Freelancer (OSF). All rights reserved.
          </div>
          <div className="flex items-center gap-1 select-none">
            Crafted for innovators with <Heart className="w-3 h-3 text-rose-500 fill-current animate-pulse" /> across India
          </div>
        </div>

      </div>
    </footer>
  );
}
