import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
    return (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Souscrivez à notre Newsletter</h1>
      <p className="p__opensans">Pour ne pas rater nos nouveautés!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Reinseignez votre adresse mail" />
      <button type="button" className="custom__button">Souscrivez</button>
    </div>
  </div>
    )
    };

export default Newsletter;