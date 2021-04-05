import React from 'react';
import { Link } from 'react-router-dom';
import account from 'src/assets/icones/account.svg';
import retour from 'src/assets/icones/retour.svg';
import hiker from 'src/assets/icones/hiker.svg';
import boot from 'src/assets/icones/boot.svg';
import footprints from 'src/assets/icones/footprints.svg';
import pickaxe from 'src/assets/icones/pickaxe.svg';


import './account.scss';

// this component will be only static
const Account = () => (
  <div className="account">
    <Link to="/">
      <img className="account_return" src={retour} alt="retour" />
    </Link>
    <div className="account_title_margin">
      <img className="account_bee" src={account} alt="account" />
      <h2 className="account_title">Mon compte</h2>
    </div>
    <div className="account_container">
      <Link
        to="/profile"
        className="account_profil"
      >
        <img className="account_profil_icon" src={hiker} alt="icone" />
        <h3 className="account_profil_title">Mon profil</h3>
      </Link>
      <Link
        to="/incoming_walks"
        className="account_incomingwalks"
      >
        <img className="account_incomingwalks_icon" src={boot} alt="icone" />
        <h3 className="account_incomingwalks_title">Mes randonnées à venir</h3>
      </Link>
      <Link to="/my_hikes" className="account_myhikes">
        <img className="account_myhikes_icon" src={pickaxe} alt="icone" />
        <h3 className="account_myhikes_title">Mes randonnées organisées</h3>
      </Link>
      <Link to="/archived_walks" className="account_archived">
        <img className="account_archived_icon" src={footprints} alt="icone" />
        <h3 className="account_archived_title">Mes randonnées passées</h3>
      </Link>
    </div>
  </div>
);


export default Account;
