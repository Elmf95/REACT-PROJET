import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
    return (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Nous trouver</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">28 rue George Sand 75016</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horaires</p>
        <p className="p__opensans">Lun - Ven 08:00 - 22:00</p>
        <p className="p__opensans">Week-end: 10:00 - 03:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitez</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
  )
};

export default FindUs;