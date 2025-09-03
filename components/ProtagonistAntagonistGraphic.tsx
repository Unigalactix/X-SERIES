
import React from 'react';

export const ProtagonistAntagonistGraphic: React.FC = () => {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-label="An abstract graphic showing a purple hero figure facing a red villain figure with VS between them.">
      <defs>
        <filter id="glow-protagonist">
          <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur" />
        </filter>
         <filter id="glow-antagonist">
          <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur" />
        </filter>
         <linearGradient id="grad-protagonist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#a855f7'}} />
          <stop offset="100%" style={{stopColor: '#6d28d9'}} />
        </linearGradient>
        <linearGradient id="grad-antagonist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ef4444'}} />
          <stop offset="100%" style={{stopColor: '#b91c1c'}} />
        </linearGradient>
      </defs>

      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        className="font-orbitron" 
        fontSize="100" 
        fill="#9ca3af" 
        style={{textShadow: '0 0 10px #000'}}>
        VS
      </text>
      
      {/* Protagonist - Uni */}
      <g transform="translate(150, 150)" role="img" aria-label="Protagonist Uni">
        <path 
          d="M 0 -120 C 80 -120, 100 -50, 100 0 C 100 50, 80 120, 0 120 L 0 -120 Z"
          fill="url(#grad-protagonist)" 
          style={{filter: 'drop-shadow(0 0 15px #a855f7)'}}
        />
         <path
          d="M -20 -80 L 60 0 L -20 80"
          fill="none"
          stroke="#e9d5ff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{filter: 'drop-shadow(0 0 8px #c084fc)'}}
        />
      </g>

      {/* Antagonist - MAX */}
      <g transform="translate(650, 150) scale(-1, 1)" role="img" aria-label="Antagonist MAX">
        <path 
          d="M 0 -120 C 80 -120, 100 -50, 100 0 C 100 50, 80 120, 0 120 L 0 -120 Z"
          fill="url(#grad-antagonist)" 
          style={{filter: 'drop-shadow(0 0 15px #ef4444)'}}
        />
         <path
          d="M -20 -80 L 60 0 L -20 80"
          fill="none"
          stroke="#fecaca"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{filter: 'drop-shadow(0 0 8px #ef4444)'}}
        />
      </g>
    </svg>
  );
};
