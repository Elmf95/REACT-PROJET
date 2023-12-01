import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chassez les nouvelles senteurs" />
        <h1 className="app__header-h1">La clé pour un bon dîner.</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Plongez dans une expérience gastronomique inégalée, où l'élégance et le raffinement se rencontrent pour créer des souvenirs mémorables.
        </p>
        <button type="button" className="custom__button">Explorez</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;