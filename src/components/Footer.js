import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='sect-footer'>
      <div className='footer-element'>
        <div className='footer-img'>
          <img src="img.jpg" alt="image footer" />
        </div>
        <div className='footer-nav'>
          <h1>Doormat</h1>
          <ul>
            <li>Navigation</li>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Commander en ligne</li>
            <li>Se connecter</li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h1>Contact</h1>
          <ul>
            <li>Adresse</li>
            <li>Numéro de téléphone</li>
            <li>Email</li>
          </ul>
        </div>
        <div className='footer-sociaux'>
          <h1>Réseaux sociaux</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/votrepage" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/votrepage" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/votrepage" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            {/* Ajoutez d'autres liens vers des réseaux sociaux si nécessaire */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
