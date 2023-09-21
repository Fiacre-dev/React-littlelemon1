import React from 'react';
import './Hero.css';
function Hero() {
    return (
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Le restaurant Little Lemon vous propose une cuisine variée et fraîche, allant des délicieuses salades méditerranéennes aux pizzas authentiques et aux desserts gourmands. Chaque plat est préparé avec soin et des ingrédients de qualité, pour une expérience culinaire inoubliable. Venez déguster nos saveurs uniques chez Little Lemon et laissez-vous séduire par la fraîcheur de notre cuisine.</p>
            <div class='bouton'>
            <a href='#' class='btn-hero'>Réserver une table</a>
            </div>
        </div>
          <div class='hero2'></div>
      </section>
    );
  }export default Hero;