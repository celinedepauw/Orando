import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// icons from https://react-icons.github.io/react-icons
import { BiHomeHeart, BiPlusMedical } from 'react-icons/bi';
// import { IoCreate } from 'react-icons/io';
import { FaHiking } from 'react-icons/fa';
// to connection - connected
import { IoMdPerson } from 'react-icons/io';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import homeLogo from 'src/assets/icones/home.svg';
import createLogo from 'src/assets/icones/create-hike.svg';
import server from 'src/assets/icones/server.svg';
import bear from 'src/assets/icones/bear.svg';
import hiker from 'src/assets/icones/hiker.svg';
import exit from 'src/assets/icones/exit.svg';
import login from 'src/assets/icones/login.svg';
import lock from 'src/assets/icones/lock.svg';

import './mobilenav.scss';

const MobileNav = ({ isLogged, handleLogout }) => (
  <nav className="mobilenav">
    <Link to="/">
      <img src={homeLogo} alt="home logo" className="mobilenav_home" />
    </Link>
    <a href="https://orando.me/o/walk/create">
      <img src={createLogo} alt="create hike" className="mobilenav_create" />
    </a>
    {!isLogged && (
      <Link to="/authentication">
        <img src={lock} alt="login" className="mobilenav_login" />
      </Link>
    )}
    {isLogged && (
      <>
        <Link to="/account">
          <img className="mobilenav_connected" src={bear} alt="logged" />
        </Link>
        <a href="https://orando.me/o/logout" className="mobilenav_logout" type="submit" onClick={handleLogout}>
          <RiLogoutCircleRLine size={46} />
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
