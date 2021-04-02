import React from 'react';
import PropTypes from 'prop-types';
import OneParticipant from 'src/components/Participants/OneParticipant';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

import './participants.scss';

const Participants = ({ walks, loadingWalk }) => {
  const { id } = useParams();
  const walk = walks.find((item) => item.id == id);

  return (
    <div>
      {loadingWalk && <div>Chargement en cours...</div>}
      {!loadingWalk && (
        <>
          <div className="participants">
            <h2 className="participants_walk_title">Liste des participants inscrits à la randonnée</h2>
            <h3 className="participants_walk_name">{walk.title}, le <Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{walk.date}</Moment></h3>
            <p className="participants_walk_number"> {walk.participants.length} participant(s)</p>
            <div className="participants_list">
              {walk.participants.map((participant) => (
                <OneParticipant
                  key={participant.user.id}
                  {...participant.user}
                  creator={walk.creator}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Participants.propTypes = {
  loadingWalk: PropTypes.bool.isRequired,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Participants;
