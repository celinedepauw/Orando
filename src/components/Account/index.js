import React from 'react';

import './account.scss';

// preparation to use Link in the next step
// import { Link } from 'react-router-dom';
/*
<Link
    to={}
    className="account_profil"
    >
      Fonctionnement du site
</Link>
*/


// this component will be only static
const Account = () => (
  <div className="account">
    <h2 className="account_title">Mon compte</h2>
    <div className="account_container">
      <div className="account_profil">
        <a href="">Mon profil</a>
      </div>
      <div className="account_incomingwalks">
        <a href="">Mes randonnées à venir</a>
      </div>
      <div className="account_myhikes">
        <a href="">Mes randonnées organisées</a>
      </div>
    </div>
  </div>
);

export default Account;
