import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import Loader from 'src/components/Loader';

// import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import './walk.scss';

import mountain from 'src/assets/icones/047-mountain.svg';
import retour from 'src/assets/icones/retour.svg';
import hiking from 'src/assets/icones/hiking.svg';
import clock from 'src/assets/icones/clock.svg';
import climbing from 'src/assets/icones/climbing.svg';
import twoHikes from 'src/assets/icones/two_hikes.svg';
import info from 'src/assets/icones/info.svg';
import distance from 'src/assets/icones/012-map.svg';

const Walk = ({ walks, loadingWalk, handleParticipation }) => {
  // console.log(walks);

  const { id } = useParams();

  const walk = walks.find((item) => item.id == id);
  const userId = localStorage.getItem('currentUserId');

  return (
    <>
      {loadingWalk && <div> <Loader /> </div> }
      {!loadingWalk && (
        <div className="walk">
          <h2 className="walk_title">{walk.title}</h2>
          <p className="walk_area">{walk.area.name}</p>
          <p className="walk_date">Le <Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{walk.date}</Moment></p>
          <div className="walk_tags_list">
            {walk.tags.map((tag) => (
              <p key={tag.name} className={`walk_tag_${tag.color}`}>{tag.name}</p>
            ))}
          </div>
          <div className="walk_details">
            <div className="walk_starting_point">
              <img src={mountain} alt="starting-point" className="walk_starting_point_icon" />
              <p className="walk_starting_point_text"> Départ de : {walk.startingPoint}</p>
            </div>
            <div className="walk_end_point">
              <img src={retour} alt="end-point" className="walk_end_point_icon" />
              {walk.endPoint ? <p className="walk_end_point_text"> Arrivée à : {walk.endPoint}</p> : <p className="walk_end_point_text"> Cette randonnée est une boucle</p>}
            </div>
            <div className="walk_distance">
              <img src={distance} alt="distance" className="walk_distance_icon" />
              {walk.kilometre ? <p className="walk_distance_text">Distance : {walk.kilometre} kms</p> : <p className="walk_distance_text">Distance non renseignée</p>}
            </div>
            <div className="walk_difficulty">
              <img src={climbing} alt="difficulty" className="walk_difficulty_icon" />
              <p className="walk_difficulty_text">Niveau de difficulté : {walk.difficulty}</p>
            </div>
            <div className="walk_duration">
              <img src={clock} alt="duration" className="walk_duration_icon" />
              <p className="walk_duration_text">Durée : {walk.duration}</p>
            </div>
            <div className="walk_elevation">
              <img src={hiking} alt="elevation" className="walk_elevation_icon" />
              {walk.elevation ? <p className="walk_elevation_text"> Dénivelé : {walk.elevation} mètres</p> : <p className="walk_elevation_text">Dénivelé non renseigné</p>}
            </div>
            <div className="walk_nbPeople">
              <img src={twoHikes} alt="number-people" className="walk_nbPeople_icon" />
              {walk.maxNbPersons ? <p className="walk_maxNbPeople_text">Nombre limite de participants : {walk.maxNbPersons}</p> : <p className="walk_maxNbPeople_text">Pas de limite dans le nombre de participants</p>}
            </div>
            <div className="walk_description">
              <img src={info} alt="description" className="walk_description_icon" />
              <p className="walk_description_text"> Description / Infos pratiques : <br /> {walk.description}</p>
            </div>
          </div>
          <div className="walk-links">
            {walk.creator.id == userId ? (
              <a className="walk_edit_link" href={`https://orando.me/o/walk/edit/${id}`}>
                <button className="walk_button_edit" type="button">Modifier la randonnée</button>
              </a>
            ) : (
              <>
                <a className="walk_contact_link" href={`https://orando.me/o/profile/${walk.creator.id}/contact-user`}>Contacter {walk.creator.nickname} pour avoir plus d'informations !</a>
                { userId ? <button className="walk_participate_button" type="button" onClick={() => handleParticipation(id)}>Je souhaite participer !</button> : <Link to="/authentication" className="walk_participate_button">Je souhaite participer !</Link>}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Walk.propTypes = {
  loadingWalk: PropTypes.bool.isRequired,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      elevation: PropTypes.number,
      maxNbPersons: PropTypes.number,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleParticipation: PropTypes.func.isRequired,
};

Walk.funcdefaultProps = {
  walks: [
    {
      endPoint: '',
      elevation: null,
      maxNbPersons: null,
    },
  ],
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
