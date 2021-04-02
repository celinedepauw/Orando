import React from 'react';
import PropTypes from 'prop-types';

import photo from 'src/assets/images/Moi.jpg';

const OneParticipant = ({ id, nickname, creator }) => (
  <div className="oneParticipant">
    <img className="one_participant_image" size={50} src={photo} alt="" />
    {!creator.id === id ? (<a href={`https://orando.me/o/profile/${id}/contact-user`} className="one_participant_contact">Contacter {nickname}</a>) : (<p className="one_participant_creator">Je suis le seul participant pour le moment</p>)}
  </div>
);

OneParticipant.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
};

export default OneParticipant;
