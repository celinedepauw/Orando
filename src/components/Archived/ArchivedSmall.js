import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArchivedSmall = ({
  id,
  title,
  date,
  area,
  difficulty,
  duration,
}) => {
  console.log();

  return (
    <div className="archived_infos">
      <h3 className="archived_infos_title">{title}</h3>
      <p className="archived_infos_area">{area.name}</p>
      <p className="archived_infos_date">{date}</p>
      <p className="archived_infos_time">{duration} heures</p>
      <p className="archived_infos_level">{difficulty}</p>
      <Link to={`/walks/${id}`}>
        <button className="archived_infos_button" type="submit">Voir détails</button>
      </Link>
    </div>
  );
};

ArchivedSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ArchivedSmall;
