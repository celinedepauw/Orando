import React from 'react';

import photo from 'src/assets/images/Moi.jpg';

const OneParticipant = ({ nickname }) => {
  console.log('résultat');
  return (
    <div className="oneParticipant">
      <img className="one_participant_image" size={50} src={photo} alt="" />
      <a className="one_participant_contact" href="">Contacter {nickname}</a>
    </div>
);
};

export default OneParticipant;
