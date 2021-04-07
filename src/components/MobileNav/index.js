import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// logo to redirect to home
import homeLogo from 'src/assets/icones/home.svg';
// logo to create a hike
import createLogo from 'src/assets/icones/create-hike.svg';
// logo account
import hiker from 'src/assets/icones/hiker.svg';
// logo to disconnect
import exit2 from 'src/assets/icones/exit2.svg';
// to connection - connected
import login from 'src/assets/icones/login.svg';
import './mobilenav.scss';

const MobileNav = ({ isLogged, handleLogout }) => (
  <nav className="mobilenav">
    <Link to="/" className="mobilenav_home_content">
      <img src={homeLogo} alt="home logo" className="mobilenav_home" />
      <p className="mobilenav_home_text">Accueil</p>
    </Link>
    <a href="https://orando.me/o/walk/create" className="mobilenav_create_content">
      <img src={createLogo} alt="create hike" className="mobilenav_create" />
      <p className="mobilenav_create_text">Créer</p>
    </a>
    {!isLogged && (
      <Link to="/authentication" className="mobilenav_login_content">
        <img src={login} alt="login" className="mobilenav_login" />
        <p className="mobilenav_login_text">Connexion</p>
      </Link>
    )}
    {isLogged && (
      <>
        <Link to="/account" className="mobilenav_connected_content">
          <img className="mobilenav_connected" src={hiker} alt="logged" />
          <p className="mobilenav_connected_text">Mon compte</p>
        </Link>
        <a href="https://orando.me/o/logout" className="mobilenav_logout_content" type="submit" onClick={handleLogout}>
          <img className="mobilenav_logout" src={exit2} alt="logged" />
          <p className="mobilenav_logout_text">Deconnexion</p>
        </a>
      </>
    )}
  </nav>
);

MobileNav.propTypes = {
  /** toggle between "connected" or "not connected" */
  // i change the proptype isLogged into "is required"
  // here this props is essential to display the right icon(s)
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default MobileNav;
