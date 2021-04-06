import React from 'react';

import './error.scss';

const Error = () => (
  <div className="error">
    <h1 className="error_title">Page introuvable</h1>
    <p className="error_contain">Vous vous êtes perdus en chemin...</p>
    <img className="error_image" src="https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif" alt="homme perdu, regardant sa carte" />
  </div>
);

export default Error;
