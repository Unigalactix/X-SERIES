import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DimensionsSection } from './components/DimensionsSection';
import { SwordsSection } from './components/SwordsSection';
import { CharactersSection } from './components/CharactersSection';
import { books } from './constants';
import { Footer } from './components/Footer';
import { BookSection } from './components/BookSection';
import { FadeInSection } from './components/FadeInSection';

const App: React.FC = () => {
  return (
    <div className="bg-black text-slate-300 min-h-screen antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.1),_transparent_30%),_radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.1),_transparent_30%)]"></div>
      
      <Header />
      
      <main className="relative z-10">
        <Hero />

        <div className="container mx-auto px-6 py-12 md:py-20 space-y-24">
          <div id="books" className="text-center">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 text-glow">The Saga</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Three books chronicle the journey of Uni and the fate of the dimensions.</p>
          </div>

          {books.map((book, index) => (
            <FadeInSection key={book.id}>
              <BookSection book={book} align={index % 2 === 0 ? 'left' : 'right'} />
            </FadeInSection>
          ))}

          <div id="lore" className="text-center pt-12">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 text-glow">World Lore</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Explore the universe of the UNI-X Saga, from the dimensions to the key figures who shape it.</p>
          </div>
          
          <FadeInSection>
            <DimensionsSection />
          </FadeInSection>
          <FadeInSection>
            <SwordsSection />
          </FadeInSection>
          <FadeInSection>
            <CharactersSection />
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
