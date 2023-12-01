import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
    return (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">30 rue George Sand, 75016</p>
        <p className="p__opensans">+33 6 18 06 75 70</p>
        <p className="p__opensans">+33 6 18 06 75 70</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;Le meilleur moyen de vous retrouver est de vous laisser aller.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires</h1>
        <p className="p__opensans">Lundi - Vendredi:</p>
        <p className="p__opensans">08:00  - 22:00 </p>
        <p className="p__opensans">Week-end:</p>
        <p className="p__opensans">07:00 - 02:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. Tous les droits réservés.</p>
    </div>
  </div>
)
};

export default Footer;