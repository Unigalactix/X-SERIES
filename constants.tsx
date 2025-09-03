import React from 'react';
import type { IDimension, ISword, ICharacter, IBook } from './types';
import { SwordIcon } from './components/SwordIcon';

export const books: IBook[] = [
  {
    id: 'book-x',
    name: 'X',
    subtitle: '',
    imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop',
    chapters: [
      'Regular Life',
      'The Turn',
      'The Responsibility',
      'MAX',
      'The Atlantic and The New Planet',
      'Who Am I?',
      'No Tomorrow (mystery of Space sword)',
      'Vs',
    ],
  },
  {
    id: 'book-x-reloaded',
    name: 'X-Reloaded',
    subtitle: '✘²',
    imageUrl: 'https://images.unsplash.com/photo-1554189097-9497434a3621?q=80&w=800&auto=format&fit=crop',
    chapters: [
      'MATRIX AND X',
      'DEVIL',
      'BULLET',
      'NUT',
      'VECTOR',
      'TRAINING',
      'THE BATTLE',
      'RELOAD',
    ],
  },
  {
    id: 'book-xtreme',
    name: 'Xtreme',
    subtitle: '✘³',
    imageUrl: 'https://images.unsplash.com/photo-1599343358763-a3b0221341c3?q=80&w=800&auto=format&fit=crop',
    chapters: [
      'Early Life',
      'AIM',
      'Return',
      'Love',
      'Redeem',
      'Bond',
      'War',
      'Paradox',
    ],
  },
];

export const dimensions: IDimension[] = [
  { name: 'Reon', description: 'The dimension where the main story starts, inhabited by human-like people.' },
  { name: 'Autist', description: 'A dimension connected to the others, origin of the Water Sword wielder.' },
  { name: 'Jeither', description: 'The home dimension of the Lightning Sword wielder.' },
  { name: 'Nature (We are here)', description: 'The most civilized dimension, where powers originate. Has an open portal to outer space.' },
  { name: 'Enithen', description: 'Origin of the Fire Sword wielder. A battle took place here.' },
  { name: 'Saithef', description: 'The home dimension of the Earth Sword wielder.' },
  { name: 'Haderi', description: 'The richest dimension, considered heaven in myths, and home to the Sword Boy\'s organization.' },
];

export const swords: ISword[] = [
  { name: 'Air Sword', wielder: 'Uni', description: 'Controls every gas in the universe. The lead sword.', color: 'purple-400', icon: SwordIcon },
  { name: 'Earth Sword', wielder: 'Reni', description: 'Controls minerals present in earth dimensions.', color: 'yellow-600', icon: SwordIcon },
  { name: 'Fire Sword', wielder: 'Sarodh', description: 'Manages and controls pure fire.', color: 'red-500', icon: SwordIcon },
  { name: 'Water Sword', wielder: 'Neth', description: 'Controls all liquid state materials.', color: 'blue-400', icon: SwordIcon },
  { name: 'Lightning Sword', wielder: 'Mestan', description: 'Controls thunder, electronic and electrical power.', color: 'yellow-400', icon: SwordIcon },
];

export const characters: ICharacter[] = [
  { name: 'Uni', role: 'Protagonist, Leader of Sword Boys', description: 'A boy with a lost past who discovers he has the power of nature and is destined to lead the Sword Boys and save all dimensions.' },
  { name: 'Darvin', role: 'Leader & Maker of Swords', description: 'A superior in the Sword Boy\'s organization who seeks out individuals capable of wielding the powerful swords.' },
  { name: 'Grendir', role: 'Head of Department, Trainer', description: 'Manages the Sword Boy\'s organization and trains the new recruits, guiding them on their first missions.' },
  { name: 'MAX', role: 'Primary Antagonist', description: 'A mysterious and powerful being who looks identical to Uni. He seeks the legendary Sword X to rule the world.' },
];