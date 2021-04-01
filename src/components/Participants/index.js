import React from 'react';

import './participants.scss';

import photo from 'src/assets/images/Moi.jpg';

const Participants = () => (
  <div className="participants">
    <h2 className="participants_walk_title">Liste des participants inscrits à la randonnée</h2>
    <h3 className="participants_walk_name">Nom de la randonnée</h3>
    <div className="one_participant">
      <img className="one_participant_image" size={50} src={photo} alt="" />
      <a className="one_participant_contact" href="">Contacter PSEUDO</a>
    </div>
    <div className="one_participant">
      <img className="one_participant_image" size={50} src={photo} alt="" />
      <a className="one_participant_contact" href="">Contacter PSEUDO</a>
    </div>
  </div>
);

export default Participants;
