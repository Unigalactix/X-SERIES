import React from 'react';
import type { IBook } from '../types';

interface BookSectionProps {
  book: IBook;
  align: 'left' | 'right';
}

// Helper function to convert a number to a Roman numeral
const toRoman = (num: number): string => {
  const values = [
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let roman = '';
  let currentNum = num;

  for (const { value, symbol } of values) {
    while (currentNum >= value) {
      roman += symbol;
      currentNum -= value;
    }
  }
  return roman;
};


export const BookSection: React.FC<BookSectionProps> = ({ book, align }) => {
  const isLeftAligned = align === 'left';

  return (
    <section id={book.id} className="fade-in">
      <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ${isLeftAligned ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-2/5 flex items-center justify-center p-4">
          <img 
            src={book.imageUrl} 
            alt={`Cover for ${book.name}`} 
            className="max-w-xs md:max-w-sm w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]" 
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-purple-400 text-glow">
            {book.name}
            {book.subtitle && <span className="text-3xl text-slate-400 ml-3">{book.subtitle}</span>}
          </h2>
          <h3 className="text-slate-300 mt-2 mb-6 font-semibold tracking-wider uppercase">Chapter List</h3>
          <ul className="list-none columns-1 sm:columns-2 gap-x-8 text-slate-400 space-y-2">
            {book.chapters.map((chapter, index) => (
              <li key={index} className="transition-colors duration-300 hover:text-white flex items-start">
                <span className="font-orbitron font-bold text-purple-300 w-10 text-right mr-3 shrink-0">{toRoman(index + 1)}.</span>
                <span>{chapter}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
