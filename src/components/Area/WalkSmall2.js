import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import award from 'src/assets/icones/058-award.svg';

const WalkSmall2 = ({
  id,
  title,
  date,
  difficulty,
  duration,
  creator,
}) => {
  const userId = localStorage.getItem('currentUserId');
  return (
    <div className="area_walk_small">
      <h3 className="area_walk_title">{title}</h3>
      <p className="area_walk_date"><Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{date}</Moment></p>
      <p className="area_walk_difficulty">{difficulty}</p>
      <p className="area_walk_duration">{duration}</p>
      <Link to={`/walks/${id}`} className="area_walk_more_infos">En savoir plus </Link>
      {creator.id == userId ? <p className="area_walk_creator"><img className="area_walk_creator_picture" src={award} alt="logo-creator" />Je suis l'organisateur</p> : <></>}
    </div>
  );
};

WalkSmall2.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
};

export default WalkSmall2;
