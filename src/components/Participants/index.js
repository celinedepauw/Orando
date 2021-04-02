import React from 'react';
import OneParticipant from 'src/components/Participants/OneParticipant';

import './participants.scss';

const Participants = () => (
  <div className="participants">
    <h2 className="participants_walk_title">Liste des participants inscrits à la randonnée</h2>
    <h3 className="participants_walk_name">Nom de la randonnée, le 15/04/2021</h3>
    <div className="participants_list">
      <OneParticipant />
      <OneParticipant />
      <OneParticipant />
      <OneParticipant />
    </div>
  </div>
);

export default Participants;
