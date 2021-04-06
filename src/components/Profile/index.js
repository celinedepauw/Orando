import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sign from 'src/assets/icones/sign.svg';
import hiker from 'src/assets/icones/hiker.svg';
import bear from 'src/assets/icones/bear.svg';

import './profile.scss';

const Profile = ({ user, loadingUser }) => {
  const userDatas = user.user;

  return (
    <div className="profile">
      {loadingUser && <div>Chargement en cours...</div>}
      {!loadingUser && (
        <>
          <Link to="/account">
            <img className="profile_return_account" src={sign} alt="retour" />
          </Link>
          <div className="profile_title_container">
            <img className="profile_icon" src={hiker} alt="account" />
            <h2 className="profile_title">Mon profil</h2>
          </div>
          <div className="profile_container">
            <div>
              <img className="profile_picture" alt="avatar" src={userDatas.picture !== null ? `https://orando.me/o/images/users/${userDatas.picture}` : bear} />
            </div>
            <div className="profile_pseudo">
              <h3>Pseudo: {userDatas.nickname}</h3>
            </div>
            <div className="profile_pseudo">Prénom: {userDatas.firstname}</div>
            <div className="profile_pseudo">Nom: {userDatas.lastname}</div>
            <div className="profile_pseudo">Date de naissance: {userDatas.dateOfBirth}</div>
            <div className="profile_pseudo">Email: {userDatas.email}</div>
            <div className="profile_pseudo">Région: {userDatas.area.name}</div>
            <div className="profile_pseudo">
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
