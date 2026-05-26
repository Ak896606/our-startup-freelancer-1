import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import StatsSection from './components/StatsSection';
import ChallengeTracksSection from './components/ChallengeTracksSection';
import TimelineSection from './components/TimelineSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import OSFLogo from './components/OSFLogo';
import { TARGET_DATE } from './data';
import { Sparkles, Terminal, ShieldAlert, Cpu, ArrowUpRight, ChevronRight, Play } from 'lucide-react';

/* -------------------------------------------------------------
   Interactive Canvas Particle Background
   Creates floating neon particles that respond to the mouse cursor
------------------------------------------------------------- */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = [
      'rgba(157, 78, 221, 0.4)', // Purple
      'rgba(0, 180, 216, 0.4)',  // Blue
      'rgba(255, 0, 127, 0.3)',  // Pink
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
      for (let i = 0; i < density; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        particles.push({
          x,
          y,
          size,
          baseX: x,
          baseY: y,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Normal drift
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary reflection
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Mouse connection & evasion
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          p.x -= dirX * force * 2;
          p.y -= dirY * force * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Hook up interactive connections (spiders web)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(157, 78, 221, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-[2]"
    />
  );
}

export default function App() {
  const [terminalText, setTerminalText] = useState('npm run hackathon --init');
  const [showTerminalConsole, setShowTerminalConsole] = useState(true);

  return (
    <div className="min-h-screen bg-cyber-bg text-white font-sans selection:bg-[#9d4edd]/30 selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Background Global Gradients and Grid */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-30"></div>
      
      {/* Immersive UI Background glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#a855f7] filter blur-[120px] opacity-[0.35] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#3b82f6] filter blur-[120px] opacity-[0.35] pointer-events-none z-0"></div>

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Hero Landing Section */}
      <section id="hero" className="relative min-h-screen pt-32 pb-16 flex items-center z-10">
        
        {/* Animated Particles canvas layout */}
        <ParticleBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Column 1: Left textual information */}
            <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 pointer-events-auto">
              
              {/* Official Brand Header Badge */}
              {/* Immersive UI Date Badge */}
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-semibold tracking-wider font-mono uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)] animate-float-slow">
                📅 20 June – 23 June 2026
              </div>

              {/* Tagline / Subheading */}
              <p className="text-sm font-bold tracking-[0.15em] text-cyber-blue uppercase font-sans animate-pulse-slow">
                India’s Biggest Online Student Hackathon
              </p>

              {/* Main Heading Text */}
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] select-text">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#94a3b8] drop-shadow-md">
                    OSF HackOne
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple text-glow-purple font-mono tracking-tighter text-4xl sm:text-6xl lg:text-7xl">
                    2K26
                  </span>
                </h1>
              </div>

              {/* Short professional description */}
              <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal max-w-xl select-text">
                Join innovators, developers, designers and startup enthusiasts from across India to build impactful solutions in an exciting 48-hour online hackathon.
              </p>

              {/* CTAs Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                {/* Primary Button "Register Now" */}
                <a
                  href="https://osfhackathon.in/login"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-extrabold font-sans text-sm uppercase tracking-wider text-white overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-90 group-hover:opacity-100 transition duration-300"></span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-xl blur-lg opacity-40 group-hover:opacity-80 transition duration-300 -z-10"></span>
                  <span className="relative flex items-center gap-2 z-10 text-glow-purple">
                    Register Now
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>

                {/* Secondary Button "Explore Challenges" */}
                <a
                  href="#challenges"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-extrabold font-sans text-sm uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200 group relative overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  <span className="relative flex items-center gap-2">
                    Explore Challenges
                    <ChevronRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Dynamic Live Countdown timer block */}
              <div className="w-full pt-4 border-t border-white/5 mt-2">
                <CountdownTimer targetDate={TARGET_DATE} />
              </div>

            </div>

            {/* Column 2: Right Visual elements (generated hacker image inside a beautiful viewport card) */}
            <div className="lg:col-span-5 relative pointer-events-auto">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[26px] bg-gradient-to-tr from-cyber-purple/10 via-transparent to-cyber-blue/10 border border-white/5 pointer-events-none -z-10"></div>
              
              {/* Main Illustration frame */}
              <div className="relative rounded-[20px] glassmorphism p-3 sm:p-4 overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
                {/* Tech scanline accent */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-blue/80 to-transparent animate-pulse-slow"></div>

                {/* Cyberpunk visual mockup */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#0c0822] border border-white/5 flex items-center justify-center">
                  <img
                    src="/src/assets/images/hacker_illustration_1779783930777.png"
                    alt="OSF HackOne 2K26 Cyberpunk Hacker Illustration"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Subtle vignette layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e071e]/70 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Glowing cyber hud coordinates label top-left */}
                  <span className="absolute top-3 left-4 font-mono text-[9px] tracking-widest text-[#00b4d8] select-none uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping"></span>
                    SYS_NODE: LOCAL_2K26 // ACTIVE
                  </span>

                  {/* Prize pool bottom HUD marker */}
                  <div className="absolute bottom-3 right-4 px-2.5 py-1.5 rounded-lg bg-cyber-bg/90 border border-white/10 font-mono text-[10px] text-white/80 flex items-center gap-1.5 select-none">
                    <Sparkles className="w-3.5 h-3.5 text-cyber-purple inline" />
                    <span>PRIZE POOL UP TO ₹3,00,000</span>
                  </div>
                </div>

                {/* Sub-Card HUD Terminal Simulator footer */}
                {showTerminalConsole && (
                  <div className="mt-3 rounded-xl bg-[#05040e]/95 border border-white/5 p-4 font-mono text-xs text-white/50 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                        <span className="text-[10px] text-white/30 ml-2">OSF_CON_CLI // bash</span>
                      </div>
                      <span className="text-[10px] text-cyber-blue">SECURE_SSL</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-cyber-pink font-bold">&gt;</span>
                        <span className="text-white/85">{terminalText}</span>
                      </div>
                      <div className="text-[11px] text-white/40 leading-relaxed font-mono">
                        [OK] Initialized HackOne Arena Sandbox <br />
                        [OK] Connected 40+ Universities across India <br />
                        [OK] Core servers synced at port 3000 <br />
                        <span className="text-emerald-400 font-bold">[ACTIVE] Striking 48 hrs ticker on June 20, 2026</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative side badge coordinates */}
              <div className="absolute -bottom-8 -left-6 hidden xl:block font-mono text-[10px] text-white/20 select-none space-y-1 bg-cyber-bg/80 border border-white/5 p-3 rounded-xl">
                <div>// SYSTEM LATENCY: 12MS</div>
                <div>// GEOLOCATION: INDIA_HUB</div>
                <div>// CONNECTIVITY: WEBSOCKET</div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Stats metrics panel row */}
      <StatsSection />

      {/* Structured domains / tracks cards mapping */}
      <ChallengeTracksSection />

      {/* Chronological timetable panel */}
      <TimelineSection />

      {/* Interactive directives accordions */}
      <FaqSection />

      {/* Primary Brand footer */}
      <Footer />

    </div>
  );
}
