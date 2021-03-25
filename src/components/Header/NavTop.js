import React from 'react';

import { BiHomeHeart, BiPlus } from 'react-icons/bi';
import { FaHiking } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const NavTop = () => (
  <nav className="header_nav">
    <a href="" className="header_nav_item"><BiHomeHeart size={25} />Accueil</a>
    <a href="" className="header_nav_item"><FaHiking size={25} /><BiPlus size={25} />Créer une randonnée</a>
    <a href="" className="header_nav_item"><IoMdPerson size={25} />Mon Compte</a>
    <a href="" className="header_nav_item"><IoMdPerson size={25} />Déconnexion</a>
  </nav>
);

export default NavTop;
