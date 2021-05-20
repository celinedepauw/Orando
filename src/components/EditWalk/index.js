import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect, Link } from 'react-router-dom';
import Loader from 'src/components/Loader';
import moment from 'moment';

import Field from 'src/components/Field';
import SelectField from 'src/components/SelectField';
import TextField from 'src/components/TextField';

import editLogo from 'src/assets/images/create.png';
import sign3 from 'src/assets/icones/sign3.svg';

import './editWalk.scss';

const EditWalk = ({
  areas,
  tags,
  walks,
  loadingWalk,
  walkTitle,
  walkAreaId,
  walkTags,
  walkStartingPoint,
  walkEndPoint,
  walkDate,
  walkDuration,
  walkDifficulty,
  walkDistance,
  walkElevation,
  walkNumberPeople,
  walkDescription,
  isUpdated,
  updateWalkField,
  updateWalkSelect,
  updateTags,
  handleEdit,
  walkTagsToUpdate,
}) => {
  const { id } = useParams();

  const walk = walks.find((item) => item.id == id);

  const areasList = areas.map((area) => (
    {
      value: area.id,
      label: area.name,
    }
  ));

  const areaSelected = areasList.find((area) => area.value === walk.area.id);

  const difficulties = [
    { value: 'Facile', label: 'Facile' },
    { value: 'Moyen', label: 'Moyen' },
    { value: 'Difficile', label: 'Difficile' },
  ];

  const difficultySelected = difficulties.find((difficulty) => difficulty.value === walk.difficulty);

  const durations = [
    { value: '1 heure', label: '1 heure' },
    { value: '1 heure 30', label: '1 heure 30' },
    { value: '2 heures', label: '2 heures' },
    { value: '2 heures 30', label: '2 heures 30' },
    { value: '3 heures', label: '3 heures' },
    { value: '3 heures 30', label: '3 heures 30' },
    { value: '4 heures', label: '4 heures' },
    { value: '4 heures 30', label: '4 heures 30' },
    { value: '5 heures', label: '5 heures' },
    { value: 'plus de 5 heures', label: 'plus de 5 heures' },
  ];

  const durationSelected = durations.find((duration) => duration.value === walk.duration);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEdit(id);
  };


  if (isUpdated) return <Redirect to="/my_hikes/" />;

  return (
    <>
      {loadingWalk && <div> <Loader /> </div> }
      {!loadingWalk && (
      <main className="editWalk">
        <Link to="/my_hikes">
          <img className="editWalk_home_return" src={sign3} alt="retour" />
        </Link>
        <div className="editWalk_title">
          <img className="editWalk_create_logo" src={editLogo} alt="logo-edit-walk" />
          <h2 className="editWalk_title_text">Modification de ma randonnée</h2>
        </div>
        <p className="editWalk_asterisk">(*) Champs obligatoires</p>
        <form className="editWalk_form" onSubmit={handleSubmit}>
          <Field
            identifier="walkTitle"
            placeholder={walk.title}
            label="Titre *"
            value={walkTitle}
            required
            pattern="[^<>]+"
            changeField={(identifier, newValue) => {
              console.log(`changeField sur titre : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <div className="editWalk_area">
            <SelectField
              className="editWalk_area_select"
              label="Région *"
              identifier="walkAreaId"
              options={areasList}
              value={walkAreaId}
              defaultValue={areaSelected}
              placeholder={walk.area.name}
              manageChange={(identifier, newValue) => {
                console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
                updateWalkSelect(identifier, newValue);
              }}
            />
          </div>
          <div className="editWalk_tag">
            <p className="editWalk_tag_title">Thème (choix multiple possible)</p>
            <div className="editWalk_tag_list">
              {walkTagsToUpdate.map((tag) => (
                <label className="editWalk_tag_label" htmlFor={tag.name} key={tag.id}>{tag.name}
                  <input
                    className="editWalk_tag_checkbox"
                    type="checkbox"
                    name={tag.name}
                    value={tag.id}
                    // checked={walk.tags.find((walkTag) => walkTag.name === tag.name)}
                    checked={tag.checked}

                    onChange={(theTag) => {
                      // console.log(theTag.target.name);
                      // console.log(theTag.target.checked);
                      updateTags(theTag.target);
                    }}
                  />
                </label>
              ))}
            </div>
          </div>
          <Field
            identifier="walkStartingPoint"
            placeholder={walk.startingPoint}
            label="Point de départ *"
            value={walkStartingPoint}
            required
            pattern="[^<>]+"
            changeField={(identifier, newValue) => {
              console.log(`changeField sur point de départ : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <Field
            identifier="walkEndPoint"
            placeholder={walk.endPoint}
            label="Point d'arrivée (si différent du point de départ)"
            value={walkEndPoint}
            pattern="[^<>]+"
            changeField={(identifier, newValue) => {
              console.log(`changeField sur point d'arrivée : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <Field
            identifier="walkDate"
            placeholder={walk.date}
            label="Date et heure du départ *"
            type="datetime-local"
            min="2021-05-03T00:00"
            value={moment(walkDate).format('YYYY-MM-DDTHH:mm')}
            changeField={(identifier, newValue) => {
            // console.log(`changeField sur date : identifier=${identifier}, newValue=${newValue}`);
              // console.log('heure', goodDate);
              updateWalkField(identifier, newValue);
            }}
          />
          <div className="editWalk_duration">
            <SelectField
              identifier="walkDuration"
              placeholder={walk.duration}
              label="Durée approximative *"
              value={walkDuration}
              defaultValue={durationSelected}
              options={durations}
              manageChange={(identifier, newValue) => {
                console.log(`changeField sur durée : identifier=${identifier}, newValue=${newValue}`);
                updateWalkSelect(identifier, newValue);
              }}
            />
          </div>
          <Field
            identifier="walkDistance"
            placeholder={walk.kilometre}
            label="Nombre de kilomètres (nombre entier)"
            type="text"
            pattern="\d*"
            minLength="1"
            maxLength="2"
            value={walkDistance}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur distance : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <div className="editWalk_difficulty">
            <SelectField
              className="editWalk_difficulty_select"
              label="Niveau de difficulté *"
              identifier="walkDifficulty"
              options={difficulties}
              value={walkDifficulty}
              defaultValue={difficultySelected}
              placeholder={walk.difficulty}
              manageChange={(identifier, newValue) => {
                console.log(`manageChange sur difficulté: identifier=${identifier}, newValue=${newValue}`);
                updateWalkSelect(identifier, newValue);
              }}
            />
          </div>
          <Field
            identifier="walkElevation"
            placeholder={walk.elevation}
            label="Dénivelé (entre 10 et 2000 mètres)"
            type="text"
            pattern="[^<>]+"
            minLength="2"
            maxLength="4"
            value={walkElevation}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur dénivelé : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <Field
            identifier="walkNumberPeople"
            placeholder={walk.maxNbPersons}
            label="Nombre de personnes maximum (jusqu'à 30 personnes)"
            type="text"
            pattern="\d*"
            maxLength="2"
            value={walkNumberPeople}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur nb de participants : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <TextField
            identifier="walkDescription"
            placeholder={walk.description}
            label="Description / Infos pratiques *"
            required
            pattern="[^<>]+"
            rows="10"
            minLength="2"
            type="text"
            value={walkDescription}
            changeField={(identifier, newValue) => {
              updateWalkField(identifier, newValue);
            }}
          />
          { /* test to have a textarea instead of a Field, need to have a controlled field
            <textarea
            identifier="walkDescription"
            placeholder={walk.description}
            label="Description / Infos pratiques *"
            required
            minLength="2"
            rows="5"
            value={walkDescription}
            changeField={(identifier, newValue) => {
              updateWalkField(identifier, newValue);
            }}
          />
         */ }
          <button type="submit" className="editWalk_submit">Modifier</button>
        </form>
      </main>
      )}
    </>
  );
};

EditWalk.propTypes = {
  loadingWalk: PropTypes.bool.isRequired,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      distance: PropTypes.string,
      elevation: PropTypes.number,
      maxNbPersons: PropTypes.number,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  walkTitle: PropTypes.string.isRequired,
  walkAreaId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  walkTags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  walkStartingPoint: PropTypes.string.isRequired,
  walkEndPoint: PropTypes.string,
  walkDate: PropTypes.string.isRequired,
  walkDuration: PropTypes.string.isRequired,
  walkDifficulty: PropTypes.string.isRequired,
  walkDistance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  walkElevation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  walkNumberPeople: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  walkDescription: PropTypes.string.isRequired,
  updateWalkField: PropTypes.func.isRequired,
  updateWalkSelect: PropTypes.func.isRequired,
  updateTags: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  walkTagsToUpdate: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

EditWalk.defaultProps = {
  walkEndPoint: '',
  walkDistance: null,
  walkElevation: null,
  walkNumberPeople: null,
};
export default EditWalk;
