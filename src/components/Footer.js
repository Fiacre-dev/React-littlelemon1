import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Contactez-nous : contact@littlelemon.com</p>
        <ul>
          <li><a href="/a-propos">À propos de nous</a></li>
          <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
          <li><a href="/mentions-legales">Mentions légales</a></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="#" className="icon-link"><i className="fab fa-facebook"></i></a>
        <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>
        <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
