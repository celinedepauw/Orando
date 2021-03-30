import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const MyHikesSmall = ({
  id,
  title,
  date,
  area,
  difficulty,
  duration,
  handleDelete,
}) => {
  const handleRemove = (evt) => {
    evt.preventDefault();
    handleDelete(id);
  };
  return (
    <div className="walk_small">
      <h3 className="walk_title">{title}</h3>
      <p className="walk_area">{area.name}</p>
      <p className="walk_date"><Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{date}</Moment></p>
      <p className="walk_difficulty">{difficulty}</p>
      <p className="walk_duration">{duration} heure(s)</p>
      <button type="button" className="walk_button_more_infos">Plus de détails</button>
      <button type="button" className="walk_button_attendees">Voir les participants</button>
      <form onSubmit={handleRemove}>
        <button type="submit" className="walk_button_delete">Annuler cette randonnée</button>
      </form>
    </div>
  );
};

MyHikesSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MyHikesSmall;
