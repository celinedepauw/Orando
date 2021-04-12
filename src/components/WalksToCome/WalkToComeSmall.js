import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import award from 'src/assets/icones/058-award.svg';

const WalkToComeSmall = ({
  id,
  title,
  date,
  area,
  difficulty,
  duration,
  creator,
  handleCancelParticipation,
}) => {
  const userId = localStorage.getItem('currentUserId');
  return (
    <div className="walk_to_come_small">
      <h3 className="walk_to_come_title">{title}</h3>
      <p className="walk_to_come_area">{area.name}</p>
      <p className="walk_to_come_date"><Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{date}</Moment></p>
      <p className="walk_to_come_difficulty">{difficulty}</p>
      <p className="walk_to_come_duration">{duration}</p>
      <Link to={`/walks/${id}`} className="walk_to_come_button_more_infos">Plus de détails
      </Link>
      {userId == creator.id ? <p className="walk_to_come_creator"><img className="walk_to_come_creator_picture" src={award} alt="logo-creator" />Je suis l'organisateur</p> : <button type="button" className="walk_to_come_button_delete" onClick={() => handleCancelParticipation(id)}>Annuler ma participation</button> }
    </div>
  );
};

WalkToComeSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handleCancelParticipation: PropTypes.func.isRequired,
  creator: PropTypes.object.isRequired,
};
export default WalkToComeSmall;
