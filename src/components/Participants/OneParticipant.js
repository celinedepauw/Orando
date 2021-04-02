import React from 'react';
import PropTypes from 'prop-types';

import photo from 'src/assets/images/Moi.jpg';

const OneParticipant = ({ nickname }) => (
  <div className="oneParticipant">
    <img className="one_participant_image" size={50} src={photo} alt="" />
    <a className="one_participant_contact" href="">Contacter {nickname}</a>
  </div>
);

OneParticipant.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default OneParticipant;
