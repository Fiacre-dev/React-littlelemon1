import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/à-propos">A propos</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Réservations</a>
        </li>
        <li>
          <a href="/commender-en ligne">Commander en ligne</a>
        </li>
        <li>
          <a href="/se connecter">Se connecter</a>
        </li>
        {/* Ajoutez d'autres liens selon votre maquette */}
      </ul>
    </nav>
  );
}

export default Nav;
