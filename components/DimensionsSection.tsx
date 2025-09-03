
import React from 'react';
import { dimensions } from '../constants';
import type { IDimension } from '../types';

const DimensionCard: React.FC<{ dimension: IDimension }> = ({ dimension }) => {
  return (
    <div className="card-bg p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
      <h3 className="font-orbitron text-xl font-bold text-purple-300">{dimension.name}</h3>
      <p className="text-slate-400 mt-2 text-sm">{dimension.description}</p>
    </div>
  );
};

export const DimensionsSection: React.FC = () => {
  return (
    <section id="dimensions" className="text-center fade-in">
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-purple-400 mb-2 text-glow">The Seven Dimensions</h2>
      <p className="text-slate-400 max-w-3xl mx-auto mb-12">Travel between dimensions is possible through a medium called "Entour".</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dimensions.map((dim, index) => (
          <DimensionCard key={index} dimension={dim} />
        ))}
      </div>
    </section>
  );
};
