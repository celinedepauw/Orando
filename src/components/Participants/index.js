import React from 'react';
import PropTypes from 'prop-types';
import OneParticipant from 'src/components/Participants/OneParticipant';
import { useParams } from 'react-router-dom';

import './participants.scss';

const Participants = ({ walks, loading }) => {
  const { id } = useParams();
  const walk = walks.find((item) => item.id == id);

  return (
    <div>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
          {console.log('rando récupérée', walk.participants)}
          <div className="participants">
            <h2 className="participants_walk_title">Liste des participants inscrits à la randonnée</h2>
            <h3 className="participants_walk_name">Nom de la randonnée, le 15/04/2021</h3>
            <div className="participants_list">
              {walk.participants.map((participant) => (
                // console.log(participant.user)
                <OneParticipant key={participant.user.id} {...participant.user} />
              ))}

            </div>
          </div>
        </>
      )}
    </div>
  );
};

Participants.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      elevation: PropTypes.number.isRequired,
      maxNbPersons: PropTypes.number.isRequired,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Participants;
