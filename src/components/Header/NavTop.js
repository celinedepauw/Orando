import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeLogo from 'src/assets/images/home.png';
import createLogo from 'src/assets/images/create.png';

import { BiXCircle } from 'react-icons/bi';
import { IoMdPerson } from 'react-icons/io';
import { ImEnter } from 'react-icons/im';

const NavTop = ({ handleLogout, isLogged }) => {
  console.log(isLogged);
  return (
    <nav className="header_nav">
      <Link to="/" className="header_nav_item"><img className="header_nav_home_logo" src={homeLogo} alt="" />Accueil</Link>
      <a href="https://orando.me/o/walk/create" className="header_nav_item"><img className="header_nav_create_logo" src={createLogo} alt="" />Créer une randonnée</a>
      {!isLogged && (
        <Link to="/authentication" className="header_nav_item"><ImEnter size={25} />Connexion</Link>
      )}
      {isLogged && (
        <>
          <Link to="/account" className="header_nav_item"><IoMdPerson size={25} />Mon Compte</Link>
          <a href="https://orando.me/o/logout" className="header_nav_item" type="submit" onClick={handleLogout}><BiXCircle size={25} />Déconnexion</a>
        </>
      )}
    </nav>
  );
};

NavTop.propTypes = {
  /** toggle between "connected" or "not connected" */
  // i change the proptype isLogged into "is required"
  // here this props is essential to display the right icon(s)
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default NavTop;
