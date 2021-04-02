import React from 'react';
import { Link } from 'react-router-dom';

import './account.scss';

// this component will be only static
const Account = () => (
  <div className="account">
    <h2 className="account_title">Mon compte</h2>
    <div className="account_container">
      <Link
        to="/profile"
        className="account_profil"
      >          Mon profil
      </Link>
      <Link
        to="/incoming_walks"
        className="account_incomingwalks"
      >          Mes randonnées à venir
      </Link>
      <Link to="/my_hikes" className="account_myhikes">
        Mes randonnées organisées
      </Link>
      <Link to="/archived_walks" className="account_archived">
        Mes randonnées passées
      </Link>
    </div>
  </div>
);


export default Account;
