import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Acceuil</a></li>
        <li className="p__opensans"><a href="#about">Propos</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login</a>
        <div />
        <a href="/" className="p__opensans">Réservez une table.</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={handleToggleMenu} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={closeMenu} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={closeMenu}>Acceuil</a></li>
              <li><a href="#about" onClick={closeMenu}>Propos</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;