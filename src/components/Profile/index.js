import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './profile.scss';

const Profile = ({ user, loadingUser }) => {
  const userDatas = user.user;

  return (
    <div className="profile">
      {loadingUser && <div>Chargement en cours...</div>}
      {!loadingUser && (
        <>
          <Link
            to="/Account"
            className="profil_back_account"
          >          Mon compte
          </Link>
          <h2 className="profile_title">Mon Profil</h2>
          <div className="profile_container">
            <div>
              <img className="profile_picture" alt="avatar" src={`https://orando.me/o/images/users/${userDatas.picture}`} />
            </div>
            <div className="profile_pseudo">Pseudo: {userDatas.nickname}</div>
            <div className="profile_fistname">Prénom: {userDatas.firstname}</div>
            <div className="profile_lastname">Nom: {userDatas.lastname}</div>
            <div className="profile_date_of_birth">Date de naissance: {userDatas.dateOfBirth}</div>
            <div className="profile_email">Email: {userDatas.email}</div>
            <div className="profile_area">Région: {userDatas.area.name}</div>
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
  loadingUser: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default Profile;
