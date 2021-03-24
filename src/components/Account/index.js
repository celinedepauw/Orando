import React from 'react';

import './account.scss';

// this component will be only static
const Account = () => (
  <div className="account">
    <h2 className="account_title">Mon compte</h2>
    <div className="account_container">
      <div className="account_profil">
        Mon profil
      </div>
      <div className="account_incomingwalks">
        Mes randonnées à venir
      </div>
      <div className="account_myhikes">
        Mes randonnées organisées
      </div>
    </div>
  </div>
);

export default Account;
