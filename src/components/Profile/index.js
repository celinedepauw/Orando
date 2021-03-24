import React from 'react';

import './profile.scss';

const Profile = () => (
  <div className="profile">
    <h2 className="profile_title">Mon Profil</h2>
    <div className="profile_container">
      <div className="profile_pseudo">Ne Perds Jamais</div>
      <div className="profile_fistname">Parker</div>
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

export default Profile;
