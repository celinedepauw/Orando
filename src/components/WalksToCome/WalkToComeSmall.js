import React from 'react';
import PropTypes from 'prop-types';

const WalkToComeSmall = ({
  title,
  date,
  area,
  difficulty,
  duration,
}) => (
  <div className="walk_to_come_small">
    <h3 className="walk_to_come_title">{title}</h3>
    <p className="walk_to_come_area">{area.name}</p>
    <p className="walk_to_come_date">{ date }</p>
    <p className="walk_to_come_difficulty">{difficulty}</p>
    <p className="walk_to_come_duration">{duration}</p>
    <button type="button" href="" className="walk_to_come_button_more_infos">En savoir plus</button>
    <button type="button" className="walk_to_come_button_delete">Annuler ma participation</button>
  </div>
);

WalkToComeSmall.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
export default WalkToComeSmall;
