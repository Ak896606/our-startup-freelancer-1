import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faqs" className="relative py-20 scroll-mt-20">
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism text-xs font-bold text-cyber-blue tracking-widest uppercase mb-4 border-cyber-blue/30 bg-cyber-blue/10">
            <HelpCircle className="w-3.5 h-3.5" />
            BATTLE DIRECTIVES
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">Questions</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#94a3b8] font-normal">
            Read down core guidelines regarding registrations, criteria, eligibility, and code timelines.
          </p>
        </div>

        {/* Accordions List container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div
                key={index}
                className={`rounded-2xl glassmorphism overflow-hidden border transition-all duration-300 ${
                  isOpen 
                    ? 'border-cyber-blue/30 bg-[#02040a]/80 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-8 font-extrabold focus:outline-none transition group cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-bold ${
                    isOpen ? 'text-white text-glow-blue' : 'text-white/80 group-hover:text-white'
                  } transition-colors duration-200`}>
                    {faq.question}
                  </span>
                  
                  <span className={`p-2 rounded-xl bg-white/5 border border-white/10 text-white/50 group-hover:text-white transition duration-200 flex-shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Collapsible Answer container */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="p-6 sm:p-8 text-sm sm:text-base font-normal leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
