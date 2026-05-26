import React from 'react';

interface OSFLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function OSFLogo({ className = '', showText = true, size = 'md' }: OSFLogoProps) {
  // Dimensions based on size
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-16 h-16';
  const textSizeHead = size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-2xl';
  const textSizeSub = size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-[11px]' : 'text-sm';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* OSF Logo Icon: High-end custom futuristic SVG */}
      <div className={`relative ${iconSize} flex-shrink-0 group`}>
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9d4edd] to-[#00b4d8] rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
        
        {/* Main Icon container */}
        <div className="relative w-full h-full rounded-xl bg-[#0d0a22] border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Inner futuristic geometric grid / nodes SVG */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 h-4/5 transform group-hover:scale-110 transition duration-300"
          >
            {/* Background tech circle */}
            <circle cx="50" cy="50" r="40" stroke="url(#logo-grad-2)" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.3" />
            
            {/* Glowing connecting nodes of the startup-freelancer tech ecosystem */}
            <path
              d="M30 45 L50 25 L70 45"
              stroke="url(#logo-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 55 L50 75 L70 55"
              stroke="url(#logo-grad-sky)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Center Core node */}
            <circle cx="50" cy="50" r="10" fill="#0d0a22" stroke="url(#logo-grad)" strokeWidth="3" />
            <circle cx="50" cy="50" r="4" fill="#00b4d8" className="animate-pulse" />

            {/* Futuristic floating satellite nodes */}
            <circle cx="30" cy="45" r="3" fill="#9d4edd" />
            <circle cx="70" cy="45" r="3" fill="#ff007f" />
            <circle cx="50" cy="25" r="3" fill="#00b4d8" />
            <circle cx="50" cy="75" r="3" fill="#9d4edd" />

            {/* Gradients definitions */}
            <defs>
              <linearGradient id="logo-grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9d4edd" />
                <stop offset="50%" stopColor="#ff007f" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
              <linearGradient id="logo-grad-sky" x1="20" y1="75" x2="80" y2="25" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#9d4edd" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#ff007f" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text labels */}
      {showText && (
        <div className="flex flex-col select-none">
          <div className="flex items-center gap-1.5">
            <span className={`${textSizeHead} font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent font-sans`}>
              OUR STARTUP
            </span>
            <span className={`${textSizeHead} font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyber-blue bg-clip-text text-transparent font-sans`}>
              FREELANCER
            </span>
          </div>
          <span className={`${textSizeSub} font-medium tracking-[0.25em] text-white/50 uppercase font-mono`}>
            Tech Ecosystem
          </span>
        </div>
      )}
    </div>
  );
}
