import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './profile.scss';

const Profile = ({ user, loading }) => {
  const userDatas = user.user;

  return (
    <div className="profile">
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
          <Link
            to="/Account"
            className="profil_back_account"
          >          Mon compte
          </Link>
          <h2 className="profile_title">Mon Profil</h2>
          <div className="profile_container">
            <div className="profile_pseudo">Pseudo: {userDatas.nickname}</div>
            <div className="profile_fistname">Prénom: {userDatas.firstname}</div>
            <div className="profile_lastname">Nom: {userDatas.lastname}</div>
            <div className="profile_date_of_birth">Date de naissance: {userDatas.dateOfBirth}</div>
            <div className="profile_email">Email: {userDatas.email}</div>
            <div className="profile_area">Région: besoin de la donnée provenant du back</div>
            <div className="profile_description">
              Description: {userDatas.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default Profile;
