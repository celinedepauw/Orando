import React from 'react';
import PropTypes from 'prop-types';
import OneParticipant from 'src/components/Participants/OneParticipant';
import { useParams, Link } from 'react-router-dom';
import sign3 from 'src/assets/icones/sign3.svg';
import Moment from 'react-moment';

import Loader from 'src/components/Loader';
import './participants.scss';

const Participants = ({ walks, loadingWalk }) => {
  const { id } = useParams();
  const walk = walks.find((item) => item.id == id);

  return (
    <div>
      {loadingWalk && <div><Loader /></div>}
      {!loadingWalk && (
        <>
          <div className="participants">
            <Link to={`/my_hikes/${id}`}>
              <img className="participants_return" src={sign3} alt="retour" />
            </Link>
            <h2 className="participants_walk_title">Liste des participants inscrits à la randonnée</h2>
            <h3 className="participants_walk_name">{walk.title}, le <Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{walk.date}</Moment></h3>
            {((walk.participants.length) - 1) === 0 ? <p className="participants_walk_number"> Aucun participant</p> : <p className="participants_walk_number"> {(walk.participants.length) - 1} participant(s)</p> }
            <div className="participants_list">
              {walk.participants.map((participant) => {
                if (participant.user.id !== walk.creator.id) {
                  return (
                    <OneParticipant
                      key={participant.user.id}
                      {...participant.user}
                    />
                  );
                }
              })}
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
