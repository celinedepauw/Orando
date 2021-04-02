import React from 'react';
import PropTypes from 'prop-types';

import photo from 'src/assets/images/Moi.jpg';

const OneParticipant = ({ id, nickname, creator }) => (
  <div className="oneParticipant">
    <img className="one_participant_image" size={50} src={photo} alt="" />
    {id === creator.id ? <p className="one_participant_creator">C'est ma randonnée</p> : <p className="one_participant_contact"><a href={`https://orando.me/o/profile/${id}/contact-user`}>Contacter {nickname}</a></p>}
  </div>
);

OneParticipant.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
};

export default OneParticipant;
