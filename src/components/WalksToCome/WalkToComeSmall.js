import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const WalkToComeSmall = ({
  id,
  title,
  date,
  area,
  difficulty,
  duration,
  handleCancelParticipation,
}) => (
  <div className="walk_to_come_small">
    <h3 className="walk_to_come_title">{title}</h3>
    <p className="walk_to_come_area">{area.name}</p>
    <p className="walk_to_come_date"><Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{date}</Moment></p>
    <p className="walk_to_come_difficulty">{difficulty}</p>
    <p className="walk_to_come_duration">{duration}</p>
    <Link to={`/walks/${id}`} className="walk_to_come_button_more_infos">En savoir plus
    </Link>
    <button type="button" className="walk_to_come_button_delete" onClick={() => handleCancelParticipation(id)}>Annuler ma participation</button>
  </div>
);

WalkToComeSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handleCancelParticipation: PropTypes.func.isRequired,
};
export default WalkToComeSmall;
