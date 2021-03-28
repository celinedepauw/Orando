import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WalkSmall2 = ({
  id,
  title,
  date,
  difficulty,
  duration,
}) => (
  <div className="area_walk_small">
    <h3 className="area_walk_title">{title}</h3>
    <p className="area_walk_date">{date}</p>
    <p className="area_walk_difficulty">{difficulty}</p>
    <p className="area_walk_duration">{duration} heure(s)</p>
    <Link to={`/walks/${id}`} className="area_walk_more_infos">En savoir plus </Link>
  </div>
);

WalkSmall2.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default WalkSmall2;
