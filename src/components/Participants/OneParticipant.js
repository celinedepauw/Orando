import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import avatar from 'src/assets/icones/fox.svg';

const OneParticipant = ({ nickname, picture }) => (
  <div className="oneParticipant">
    { picture !== '' ? <img className="one_participant_image" size={50} src={`https://orando.me/o/uploads/profile/${picture}`} alt="profile-photography" /> : <img className="one_participant_image" size={50} src={avatar} alt="avatar" />}
    <p className="one_participant_contact">
      <a href="">Contacter<span className="one_participant_nickname">{nickname}</span></a>
    </p>
  </div>
);

OneParticipant.propTypes = {
  nickname: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

OneParticipant.defaultProps = {
  picture: '',
};

export default OneParticipant;

// to go to the contact user form
//Link to={`/contact_user/${id}`}>Contacter<span className="one_participant_nickname">{nickname}</span>
//</Link>

// previous route to get the user's picture
// https://orando.me/o/images/users/${picture}
