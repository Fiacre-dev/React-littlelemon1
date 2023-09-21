import React from "react";
import './Promotion.css';
function Promotion() {
    return (
        <section className="promotion">
        <div className="promo-title">
          <h2>Promotions</h2>
          <div className="bouton2">
            <a href="#" className="btn">Commander en ligne</a>
          </div>
        </div>
        <div className="promo-element">
          <div className="promo-colonne">
            <div className="greek"></div>
            <h2>Salade</h2>
            <span >$12.99</span>
            <p>Une salade méditerranéenne colorée, mélange de tomates, concombres, olives et féta, relevée d'une vinaigrette citronnée, offrant une fraîcheur irrésistible.</p>
            <a href="#" className="btn">Commander une livraison</a>
          </div>
          <div className="promo-colonne">
            <div className="bruschetta"></div>
            <h2>Bruschetta</h2>
            <span>$5.99</span>
            <p>Une entrée italienne classique, du pain grillé frotté à l'ail, garni de tomates fraîches, basilic, et une touche d'huile d'olive pour une explosion de saveurs</p>
            <a href="#" className="btn">Commander une livraison</a>
          </div>
          <div className="promo-colonne">
            <div className="dessert" ></div>
            <h2>Dessert citron</h2>
            <span>$3.99</span>
            <p>Un délice sucré, une croûte de biscuit beurré soutenant une crème onctueuse au citron, un équilibre parfait d'acidité et de douceur.</p>
            <a href="#" className="btn">Commander une livraison</a>
          </div>
        </div>
      </section>
    );
  }export default Promotion;