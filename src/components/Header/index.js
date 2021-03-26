// import npm
import React from 'react';
import NavTop from 'src/components/Header/NavTop';

import './header.scss';

import logo from 'src/assets/images/logo.png';
import image from 'src/assets/images/header.jpg';

// component
const Header = () => (
  <header className="header">
    <img className="header_image" src={image} alt="orando bandeau" />
    <div className="header_content">
      <div className="header_top">
        <img className="header_logo" src={logo} alt="orando logo" />
        <NavTop />
      </div>
      <h1 className="header_title">O'RANDO</h1>
    </div>
  </header>
);

export default Header;
