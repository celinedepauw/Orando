// import npm
import React from 'react';

import { BiHomeHeart, BiPlus, BiPlusMedical } from 'react-icons/bi';
import { FaHiking } from 'react-icons/fa';
import { IoPersonCircleOutline, IoMdPerson } from 'react-icons/io';

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
        <nav className="header_nav">
          <a href="" className="header_nav_item"><BiHomeHeart size={25} />Accueil</a>
          <a href="" className="header_nav_item">Créer une randonnée</a>
          <a href="" className="header_nav_item">Mon Compte</a>
          <a href="" className="header_nav_item">Déconnexion</a>
        </nav>
      </div>
      <h1 className="header_title">O'RANDO</h1>
    </div>
  </header>
);

export default Header;
