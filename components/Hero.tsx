import React from 'react';
import { CodeGeneratedBackground } from './CodeGeneratedBackground';
import { books } from '../constants';

export const Hero: React.FC = () => {
  const firstBookImage = books[0]?.imageUrl;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <CodeGeneratedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="font-orbitron text-[40vw] md:text-[30vw] lg:text-[25vw] font-black leading-none">
          <span 
            className="bg-clip-text text-transparent bg-cover bg-center"
            style={{backgroundImage: `url('${firstBookImage}')`}}
          >
            X
          </span>
        </div>
        
        <div className="mt-[-5vh] md:mt-[-10vh]">
          <p className="text-slate-400 text-lg">By</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 font-orbitron tracking-widest text-glow">
            Rajesh Kodaganti
          </h2>
        </div>
      </div>
    </section>
  );
};