import React from 'react';
import { Link } from 'react-router-dom';

// icons from https://react-icons.github.io/react-icons
import { BiHomeHeart, BiPlus, BiPlusMedical } from 'react-icons/bi';
// import { IoCreate } from 'react-icons/io';
import { FaHiking } from 'react-icons/fa';
// to connection - connected
import { IoMdPerson } from 'react-icons/io';


import './mobilenav.scss';

const MobileNav = () => (
  <nav className="mobilenav">
    <Link to="/" className="mobilenav_home">
      <BiHomeHeart size={46} />
    </Link>
    <a href="http://orando.me/back/walk/create" className="mobilenav_create">
      <FaHiking size={46} />
      <BiPlusMedical size={23} className="mobilenav_plus" />
    </a>
    <Link to="/account" className="mobilenav_connected" type="submit">
      <IoMdPerson size={46} />
    </Link>
  </nav>

);

export default MobileNav;
