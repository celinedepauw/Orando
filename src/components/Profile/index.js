import React from 'react';
import PropTypes from 'prop-types';

import './profile.scss';

const Profile = ({ user }) => {
  console.log('pourquoi ça ne marche pas', user);
  return (
    <div className="profile">
      <h2 className="profile_title">Mon Profil</h2>
      <div className="profile_container">
        <div className="profile_pseudo">TOTO</div>
        <div className="profile_fistname">{user.user.firstname}</div>
        <div className="profile_lastname">Lewis</div>
        <div className="profile_date_of_birth">02/09/1990</div>
        <div className="profile_email">parker@notaproblem.com</div>
        <div className="profile_area">Fox</div>
        <div className="profile_description">
          toto
        </div>
      </div>
    </div>
  );
};
/*
Profile.propTypes = {
  user: PropTypes.arrayOf(
    
    firstname: PropTypes.string.isRequired,
    
  ).isRequired,
};
*/

export default Profile;
