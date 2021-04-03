import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './account.scss';

// this component will be only static
const Account = ({ user, loadingUser }) => (
  <div className="account">
    {loadingUser && <div>Chargement en cours...</div>}
    {!loadingUser && (
      <>
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
          >          Mes randonnées à venir ({user.incomingWalks.length})
          </Link>
          <Link to="/my_hikes" className="account_myhikes">
            Mes randonnées organisées ({user.user.walks.length})
          </Link>
          <Link to="/archived_walks" className="account_archived">
            Mes randonnées passées ({user.archivedWalks.length})
          </Link>
        </div>
      </>
    )}
  </div>
);

Account.propTypes = {
  user: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default Account;
