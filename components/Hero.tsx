import React from 'react';
import { CodeGeneratedBackground } from './CodeGeneratedBackground';
import { GraphicalX } from './GraphicalX';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <CodeGeneratedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <GraphicalX />
        
        <div className="mt-8 md:mt-12">
          <p className="text-slate-400 text-lg">By</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 font-orbitron tracking-widest text-glow">
            Rajesh Kodaganti
          </h2>
        </div>
      </div>
    </section>
  );
};