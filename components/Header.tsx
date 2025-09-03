
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-orbitron text-2xl font-bold tracking-wider text-purple-400 text-glow">
          HBC
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-wide uppercase">
          <a href="#book-x" className="hover:text-purple-400 transition-colors duration-300">X</a>
          <a href="#book-x-reloaded" className="hover:text-purple-400 transition-colors duration-300">X-Reloaded</a>
          <a href="#book-xtreme" className="hover:text-purple-400 transition-colors duration-300">Xtreme</a>
          <a href="#dimensions" className="hover:text-purple-400 transition-colors duration-300">Dimensions</a>
          <a href="#swords" className="hover:text-purple-400 transition-colors duration-300">Swords</a>
          <a href="#characters" className="hover:text-purple-400 transition-colors duration-300">Characters</a>
        </div>
        <div className="font-orbitron text-lg font-bold text-slate-400">
          UNI - SERIES
        </div>
      </nav>
    </header>
  );
};
