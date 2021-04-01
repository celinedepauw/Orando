import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { BiBeenHere, BiDirections, BiEnvelope, BiInfoCircle } from 'react-icons/bi';
import Moment from 'react-moment';

// import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import './walk.scss';

const Walk = ({ walks, loading }) => {
  // console.log(walks);

  const { id } = useParams();

  const walk = walks.find((item) => item.id == id);

  return (
    <div>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <article className="page">
          <h2 className="page-title">{walk.title}</h2>
          <p className="starting-point"><BiBeenHere size={30} /> Départ de : {walk.startingPoint}</p>
          <p className="end-point"><BiDirections size={30} />Arrivée à : {walk.endPoint}</p>
          <p className="date">Date : <Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{walk.date}</Moment></p>
          <p className="difficulty">Difficulté : {walk.difficulty}</p>
          <p className="duration">Durée : {walk.duration}</p>
          <p className="elevation">Dénivelé : {walk.elevation}</p>
          <p className="maxNbPersons">Nombre de personnes max : {walk.maxNbPersons}</p>
          <p className="area">Lieu : {walk.area.name}</p>
          <div className="description">
            <p className="post-page"><BiInfoCircle size={30} /> {walk.description}</p>
            <div className="page-links">
              <a className="link" href={`http://orando.me/back/profile/${walk.creator.id}/contact-user`}><BiEnvelope size={30} />Contacter {walk.creator.nickname} pour avoir plus d'informations !</a>
              <button className="button-page" type="button">Je souhaite participer !</button>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

Walk.propTypes = {
  loading: PropTypes.bool.isRequired,

  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      elevation: PropTypes.number.isRequired,
      maxNbPersons: PropTypes.number.isRequired,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Walk;

/*
<div>
      <button className="button-comment" type="button">Laisser un avis</button>
    </div>
    <div className="comment">
      <span className="comment-icons">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        Organisation
      </span>
      <span className="comment-icons">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarOutline />
      <IoIosStarOutline />
      Convivialité
      </span>
      <span className="comment-icons">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        Randonnée
      </span>
    </div>
    <div>
      <p className="post-comment">Laisser un commentaire :</p>
      <div className="write-comment">
      </div>
    </div>
    */
