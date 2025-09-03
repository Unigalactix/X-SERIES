
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-slate-700/50 mt-24">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <p className="font-orbitron text-lg font-bold text-purple-500">UNI-X SAGA</p>
        <p className="text-sm mt-2">An infographic experience based on the story by Rajesh Kodaganti.</p>
        <p className="text-xs mt-4">&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};