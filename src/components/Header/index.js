// import npm
import React from 'react';
import NavTop from 'src/containers/Header/navTop';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './header.scss';

import logo from 'src/assets/images/logo.png';
import image from 'src/assets/images/header.jpg';

// component
const Header = ({ isLogged }) => (
  <header className="header">
    <img className="header_image" src={image} alt="orando bandeau" />
    <div className="header_content">
      <div className="header_top">
        <Link to="/" className="header_logo_link">
          <img className="header_logo" src={logo} alt="orando logo" />
        </Link>
        <NavTop isLogged={isLogged} />
      </div>
      <h1 className="header_title">O'RANDO</h1>
    </div>
  </header>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
