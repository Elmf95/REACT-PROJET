import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
    return(
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Note du Chef" />
      <h1 className="headtext__cormorant">Nos valeurs</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Les aspirations d'un chef de restaurant luxueux transcendent les simples limites de la cuisine pour devenir une quête passionnée de l'excellence, de la créativité et de l'innovation..</p>
        </div>
        <p className="p__opensans">Pour ce chef, chaque plat est une œuvre d'art, méticuleusement conçue pour éblouir les papilles et éveiller les sens. Son ambition dépasse la simple préparation culinaire : c'est un architecte de saveurs, un artiste de la présentation et un conteur captivant à travers ses créations gustatives.</p>
      </div>

      <div className="app__chef-sign">
        <p>El mehdi Fikri</p>
        <p className="p__opensans">Chef & Fondateur</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
  )
};

export default Chef;