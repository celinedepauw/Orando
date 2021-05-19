import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sign3 from 'src/assets/icones/sign3.svg';
import hiker from 'src/assets/icones/hiker.svg';
import fox from 'src/assets/icones/fox.svg';
import fire from 'src/assets/icones/fire.svg';
import Moment from 'react-moment';

import Loader from 'src/components/Loader';
import './profile.scss';

const Profile = ({ user, loadingUser }) => {
  const userDatas = user.user;

  return (
    <div className="profile">
      {loadingUser && <div> <Loader /></div>}
      {!loadingUser && (
        <>
          <Link to="/account">
            <img className="profile_return_account" src={sign3} alt="retour" />
          </Link>
          <div className="profile_title_container">
            <img className="profile_icon" src={hiker} alt="account" />
            <h2 className="profile_title">Mon profil</h2>
          </div>
          <div className="profile_container">
            <div>
              {userDatas.picture !== '' ? <img className="profile_picture" alt="photography" src={`https://orando.me/o/uploads/profile/${userDatas.picture}`} /> : <img className="profile_avatar" alt="avatar" src={fox} />}
            </div>
            <div className="profile_container_informations">
              <div className="profile_pseudo">
                <h3>Pseudo: {userDatas.nickname}</h3>
              </div>
              <div className="profile_pseudo">Prénom: {userDatas.firstname}</div>
              <div className="profile_pseudo">Nom: {userDatas.lastname}</div>
              <div className="profile_pseudo">Date de naissance: <Moment format="DD/MM/YYYY">{userDatas.dateOfBirth}</Moment></div>
              <div className="profile_pseudo">Email: {userDatas.email}</div>
              <div className="profile_pseudo">Région: {userDatas.area.name}</div>
              <div className="profile_pseudo">
                Description: {userDatas.description}
              </div>
            </div>
          </div>
          <Link to="/update_profile">
            <button type="button" className="profile_udpate_button">
              <h4 className="profile_update_button_text">Modification</h4>
              <img className="profile_update_button_icon" src={fire} alt="icone du bouton" />
            </button>
          </Link>
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
