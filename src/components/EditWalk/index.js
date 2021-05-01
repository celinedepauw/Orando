import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Loader from 'src/components/Loader';

import editLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';
import SelectField from 'src/components/CreateWalk/select';

import './editWalk.scss';

const EditWalk = ({
  areas,
  tags,
  walks,
  loadingWalk,
  walkTitle,
  walkAreaId,
  walkStartingPoint,
  walkEndPoint,
  walkDate,
  walkDuration,
  walkDistance,
  walkElevation,
  walkNumberPeople,
  walkDescription,
  updateWalkField,
  updateWalkSelect,
  handleEdit,
}) => {
  const { id } = useParams();

  const walk = walks.find((item) => item.id == id);

  const areasList = areas.map((area) => (
    {
      value: area.id,
      label: area.name,
    }
  ));

  const tagsList = tags.map((tag) => (
    {
      value: tag.id,
      label: tag.name,
    }
  ));

  const difficulties = [
    { value: 'Facile', label: 'Facile' },
    { value: 'Moyen', label: 'Moyen' },
    { value: 'Difficile', label: 'Difficile' },
  ];

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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEdit(id);
  };

  return (
    <>
      {loadingWalk && <div> <Loader /> </div> }
      {!loadingWalk && (
      <main className="editWalk">
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
              value={walk.area.id}
              placeholder={walk.area.name}
              manageChange={(identifier, newValue) => {
                console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
                updateWalkSelect(identifier, newValue);
              }}
            />
          </div>
          <div className="editWalk_tag">
            <p className="editWalk_tag_label">Thème (choix multiple possible)</p>
            <Select
              className="editWalk_tag_select"
              label="Thème (choix multiple possible)"
              identifier="walkTags"
              options={tagsList}
              placeholder=""
              isMulti
              onChange={(selectedTags) => {
                console.log(selectedTags);
                selectedTags.map((tag) => (
                  // console.log(tag.value)
                  updateWalkSelect('walkTags', tag.value)
                ));
              }}
            />
          </div>
          <Field
            identifier="walkStartingPoint"
            placeholder={walk.startingPoint}
            label="Point de départ *"
            value={walkStartingPoint}
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
            min="2021-04-23T00:00"
            value={walkDate}
            changeField={(identifier, newValue) => {
            // console.log(`changeField sur date : identifier=${identifier}, newValue=${newValue}`);
              // console.log('heure', goodDate);
              updateWalkField(identifier, newValue);
            }}
          />
          <SelectField
            identifier="walkDuration"
            placeholder={walk.duration}
            label="Durée approximative *"
            value={walkDuration}
            options={durations}
            manageChange={(identifier, newValue) => {
              console.log(`changeField sur durée : identifier=${identifier}, newValue=${newValue}`);
              updateWalkSelect(identifier, newValue);
            }}
          />
          <Field
            identifier="walkDistance"
            placeholder={walk.kilometre}
            label="Nombre de kilomètres"
            type="number"
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
            label="Dénivelé (en mètres)"
            type="number"
            value={walkElevation}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur dénivelé : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <Field
            identifier="walkNumberPeople"
            placeholder={walk.maxNbPersons}
            label="Nombre de personnes maximum"
            type="number"
            value={walkNumberPeople}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur nb de participants : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
          <Field
            identifier="walkDescription"
            placeholder={walk.description}
            label="Description / Infos pratiques *"
            value={walkDescription}
            changeField={(identifier, newValue) => {
              console.log(`changeField sur description : identifier=${identifier}, newValue=${newValue}`);
              updateWalkField(identifier, newValue);
            }}
          />
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
  updateWalkField: PropTypes.func.isRequired,
  updateWalkSelect: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

EditWalk.defaultProps = {
  endPoint: '',
  distance: null,
  elevation: null,
  maxNbPersons: null,
};
export default EditWalk;
