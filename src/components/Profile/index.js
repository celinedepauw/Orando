import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './profile.scss';

const Profile = ({ user, loading, loadUserFromApi }) => {
  const userDatas = user.user;
  /*
  useEffect(() => {
    loadUserFromApi();
  }, []);
  */
  return (
    <div className="profile">
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
          <h2 className="profile_title">Mon Profil</h2>
          <div className="profile_container">
            <div className="profile_pseudo">TOTO</div>
            <div className="profile_fistname">{userDatas.firstname}</div>
            <div className="profile_lastname">{userDatas.lastname}</div>
            <div className="profile_date_of_birth">{userDatas.dateOfBirth}</div>
            <div className="profile_email">{userDatas.email}</div>
            <div className="profile_area">Fox</div>
            <div className="profile_description">
              {userDatas.description}
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
  loadUserFromApi: PropTypes.func.isRequired,
};

export default Profile;
