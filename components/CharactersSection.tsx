
import React from 'react';
import { characters } from '../constants';
import type { ICharacter } from '../types';
import { ProtagonistAntagonistGraphic } from './ProtagonistAntagonistGraphic';

const CharacterInfoCard: React.FC<{ character: ICharacter }> = ({ character }) => {
  return (
    <div className="card-bg p-6 rounded-xl h-full flex flex-col">
        <h3 className="font-orbitron text-2xl font-bold text-white text-glow">{character.name}</h3>
        <p className="text-purple-300 font-semibold text-sm">{character.role}</p>
        <p className="text-slate-400 text-sm mt-4 flex-grow">{character.description}</p>
    </div>
  );
};

export const CharactersSection: React.FC = () => {
  const protagonist = characters.find(c => c.name === 'Uni');
  const antagonist = characters.find(c => c.name === 'MAX');
  const mentors = characters.filter(c => c.name === 'Darvin' || c.name === 'Grendir');

  return (
    <section id="characters" className="fade-in">
        <div className="text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-purple-400 mb-12 text-glow">Key Figures</h2>
        </div>

        <div>
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center">Protagonist vs. Antagonist</h3>
            <div className="card-bg p-4 md:p-8 rounded-2xl mb-8">
                <ProtagonistAntagonistGraphic />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {protagonist && <CharacterInfoCard character={protagonist} />}
                {antagonist && <CharacterInfoCard character={antagonist} />}
            </div>
        </div>

        <div className="mt-20">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center">The Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {mentors.map(char => <CharacterInfoCard key={char.name} character={char} />)}
            </div>
        </div>
    </section>
  );
};