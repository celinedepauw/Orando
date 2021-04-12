import React from 'react';
import sign3 from 'src/assets/icones/sign3.svg';
import { Link } from 'react-router-dom';
import './error.scss';

const Error = () => (
  <div className="error">
    <Link to="/">
      <img className="error_return_home" src={sign3} alt="retour" />
    </Link>
    <h1 className="error_title">Page introuvable</h1>
    <p className="error_contain">Vous vous êtes perdus en chemin...</p>
    <img className="error_image" src="https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif" alt="homme perdu, regardant sa carte" />
  </div>
);

export default Error;
