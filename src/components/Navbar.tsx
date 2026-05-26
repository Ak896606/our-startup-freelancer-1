import React, { useState, useEffect } from 'react';
import OSFLogo from './OSFLogo';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Stats', href: '#stats' },
    { label: 'Challenge Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#02040a]/85 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Anchor */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
          >
            <OSFLogo size="sm" showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[#94a3b8] hover:text-white font-medium text-xs lg:text-sm tracking-wide transition duration-200 uppercase font-sans relative after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-cyber-blue hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Our-Startup-Freelancer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://osfhackathon.in/login"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold font-sans text-xs uppercase tracking-wider text-white overflow-hidden group border border-cyber-purple/30 shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-90 group-hover:opacity-100 transition duration-300"></span>
              {/* Extra button glow effect */}
              <span className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-xl blur-md opacity-0 group-hover:opacity-50 transition duration-300 -z-10"></span>
              <span className="relative flex items-center gap-1.5 z-10 text-glow-purple">
                Register Arena
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://osfhackathon.in/login"
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg font-bold font-sans text-xs uppercase tracking-wider text-white overflow-hidden group border border-cyber-purple/30 animate-pulse-slow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple"></span>
              <span className="relative z-10 flex items-center gap-1">
                Register
              </span>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#02040a]/98 backdrop-blur-lg border-b border-white/10 py-6 px-4 flex flex-col gap-4 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="py-3 px-4 font-bold text-sm tracking-wide text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-4 flex items-center justify-between px-4">
            <span className="text-xs text-white/40">Official Hackathon Gateway</span>
            <a
              href="https://github.com/Our-Startup-Freelancer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/60 hover:text-white"
            >
              <Github className="w-4 h-4" /> Github
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
