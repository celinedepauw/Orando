import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WalkSmall = ({
  id,
  title,
  date,
  difficulty,
  duration,
  area,
}) => (
  <div className="home_walk_small">
    <h3 className="home_walk_title">{title}</h3>
    <p className="home_walk_area">{area.name}</p>
    <p className="home_walk_date">{date}</p>
    <p className="home_walk_difficulty">{difficulty}</p>
    <p className="home_walk_duration">{duration} heure(s)</p>
    <Link to={`/walks/${id}`} className="home_walk_more_infos">En savoir plus </Link>
  </div>
);

WalkSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
};

export default WalkSmall;
