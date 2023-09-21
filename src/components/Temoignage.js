import React from "react";
import './Temoignage.css'
function Temoignage(){
    return(
        <section className="temoignages">
        <h1>Les Avis Étoilés de Nos Clients</h1>
        <div className='temoignages-personne'>
          <div className='content1'>
            <h4>Deborah </h4>
            <p>Le Little Lemon est mon endroit préféré pour savourer des plats délicieux.</p>
          </div>
          <div className='content2'>
            <h4>Deo Gratias</h4>
            <p> La bruschetta est une véritable explosion de saveurs.</p>
          </div>
          <div className='content3'>
            <h4>Merveil</h4>
            <p>Le dessert au citron  C'est le mélange parfait de douceur et d'acidité.</p>
          </div>
          <div  className='content4'>
            <h4>Houéfa</h4>
            <p> Le service est exceptionnel, la nourriture est délicieuse</p>
          </div>
        </div>
      </section>
    );
}export default Temoignage;