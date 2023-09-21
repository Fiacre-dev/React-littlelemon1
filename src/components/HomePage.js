import React from 'react';
import Hero from '../components/Hero';
import Promotion from '../components/Promotion';
import Temoignage from '../components/Temoignage';
import Apropos from '../components/Apropos';
function HomePage() {
    return (
      <div className="page-daccueil">
        <Hero />
        <Promotion />
        <Temoignage />
        <Apropos />
        {/* Ajoutez d'autres composants au besoin */}
      </div>
    );
  } export default HomePage;