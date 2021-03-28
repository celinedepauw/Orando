import React from 'react';
import PropTypes from 'prop-types';

const WalkSmall2 = ({
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
    <a href="" className="area_walk_more_infos">En savoir plus </a>
  </div>
);

WalkSmall2.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default WalkSmall2;
