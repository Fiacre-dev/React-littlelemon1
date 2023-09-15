import React from 'react';
import './hero.css';
import './promotions.css';
import './temoignages.css';
import './a-propos.css';

function Main() {
  return (
    <main>
       {/* Section Héros */}
       <section className="hero">
        <div className='Hero-element'>
          <div>
          <h1>Little lemon</h1>
          <h5>Chicago</h5>
          <p>Une brieve description du type de nourriture qu'il propose.</p>
         <div className='bouton'>
            <a href='#' className='btn-hero'>Réserver une table</a>
         </div>
          </div>
          <div className='hero2'>
            <img src="./restauranfood.jpg" alt="Image-hero"/>
          </div>
        </div>
      </section>

      {/* Section Saillants */}
      <section className="promotion">
        <div className='promo-title'>
          <h2>Promotions</h2>
          <div className='bouton2'><a href="#" className='btn'>Commander en ligne</a></div>
        </div>
        <div className='promo-element'>
          <div>
            <img src="greek-salad.jpg" alt="Greek salad"/>
            <h2>salade grecque</h2>
            <span>$12.99</span>
            <p>Description du plat</p>
            <a href="#" className='btn'>Commander une livraison</a>
          </div>
          <div>
            <img src="greek-salad.jpg" alt="Greek salad"/>
            <h2>Bruchecta</h2>
            <span>$5.99</span>
            <p>Description du plat</p>
            <a href="#" className='btn'>Commander une livraison</a>
          </div>
          <div>
            <img src="greek-salad.jpg" alt="Greek salad"/>
            <h2>Dessert au citron</h2>
            <span>$3.99</span>
            <p>Description du plat</p>
            <a href="#" className='btn'>Commander une livraison</a>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="temoignages">
        <h1>Laisser  des avis et de notes sur 5 etoiles</h1>
        <div className='temoignages-personne'>
          <div className='content'>
            <h4>Name</h4>
            <div>
             <img src="comment1.jpg" alt="personne commenter"/>
            </div>
            <p>Avis</p>
          </div>
          <div className='content'>
            <h4>Name</h4>
            <div>
              <img src="comment2.jpg" alt="personne commenter"/>
            </div>
            <p>Avis</p>
          </div>
          <div className='content'>
            <h4>Name</h4>
            <div>
             <img src="comment3.jpg" alt="personne commenter"/>
            </div>
            <p>Avis</p>
          </div>
          <div  className='content'>
            <h4>Name</h4>
            <div>
              <img src="comment4.jpg" alt="personne commenter"/>
            </div>
            <p>Avis</p>
          </div>
        </div>
        {/* Ajoutez plus de témoignages au besoin */}
      </section>

      {/* Section À Propos */}
      <section className="a-propos">
        <div className='a-propos-sect'>
          <div>
            <h1>Little lemon</h1>
            <h4>Chicago</h4>
            <p>Une brieve description du type de nourriture qu'il propose.</p>
          </div>
          <div>
            <img src="resta.jpg" alt="Image1"/>
            <img src="resnfood.jpg" alt="image2"/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
