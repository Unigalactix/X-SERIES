import React from 'react';
import { swords } from '../constants';
import type { ISword } from '../types';

const colorHexMap: { [key: string]: string } = {
  'purple-400': '#c084fc',
  'yellow-600': '#ca8a04',
  'red-500': '#ef4444',
  'blue-400': '#60a5fa',
  'yellow-400': '#facc15',
};

const SwordInfoCard: React.FC<{ sword: ISword }> = ({ sword }) => {
  const Icon = sword.icon;
  const glowColor = colorHexMap[sword.color] || '#ffffff';
  
  return (
    <div className={`card-bg p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 border-b-4 border-${sword.color}`}>
      <Icon 
        bladeClassName={`fill-current text-${sword.color}`} 
        className="w-16 h-16 mb-4"
        style={{ filter: `drop-shadow(0 0 6px ${glowColor})` }}
      />
      <h3 className={`font-orbitron text-xl font-bold text-${sword.color}`}>{sword.name}</h3>
      <p className="text-slate-300 font-semibold text-sm mt-1">Wielder: {sword.wielder}</p>
      <p className="text-slate-400 mt-3 text-xs flex-grow">{sword.description}</p>
    </div>
  );
};

export const SwordsSection: React.FC = () => {
  return (
    <section id="swords">
      <div className="text-center">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-purple-400 mb-2 text-glow">The Five Elemental Swords</h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-12">The powers of ancient gods, forged into weapons for the saviors of earth.</p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {swords.map((sword, index) => (
          <SwordInfoCard key={index} sword={sword} />
        ))}
      </div>
    </section>
  );
};
