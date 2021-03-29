import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// icons from https://react-icons.github.io/react-icons
import { BiHomeHeart, BiPlus, BiPlusMedical } from 'react-icons/bi';
// import { IoCreate } from 'react-icons/io';
import { FaHiking } from 'react-icons/fa';
// to connection - connected
import { IoMdPerson } from 'react-icons/io';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';


import './mobilenav.scss';


const MobileNav = ({ isLogged }) => { // Ne pas oublier que les props sont entre accolades
  console.log('toto', isLogged);

  // const logged = false;
  return (
    <nav className="mobilenav">
      <Link to="/" className="mobilenav_home">
        <BiHomeHeart size={46} />
      </Link>
      <Link to="/create_hiking" className="mobilenav_create">
        <FaHiking size={46} />
        <BiPlusMedical size={23} className="mobilenav_plus" />
      </Link>
      {!isLogged && (
        <Link to="/authentification" className="mobilenav_connected" type="submit">
          <RiLoginCircleLine size={46} />
        </Link>
      )}
      {isLogged && (
        <Link to="/account" className="mobilenav_connected" type="submit">
          <IoMdPerson size={46} />
        </Link>
      )}
    </nav>
  );
};

MobileNav.propTypes = {
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
};

export default MobileNav;
