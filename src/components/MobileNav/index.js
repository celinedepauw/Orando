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

import './mobilenav.scss';

const MobileNav = ({ isLogged, handleLogout }) => (
  <nav className="mobilenav">
    <Link to="/" className="mobilenav_home">
      <BiHomeHeart size={46} />
    </Link>
    <a href="http://orando.me/back/walk/create" className="mobilenav_create">
      <FaHiking size={46} />
      <BiPlusMedical size={23} className="mobilenav_plus" />
    </a>
    {!isLogged && (
      <Link to="/authentication" className="mobilenav_connected" type="submit">
        <RiLoginCircleLine size={46} />
      </Link>
    )}
    {isLogged && (
      <>
        <Link to="/account" className="mobilenav_connected" type="submit">
          <IoMdPerson size={46} />
        </Link>
        <a href="http://orando.me/back/logout" className="mobilenav_connected" type="submit" onClick={handleLogout}>
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
