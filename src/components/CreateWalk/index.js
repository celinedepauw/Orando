import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';

import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';
import SelectField from 'src/components/CreateWalk/select';

import './createWalk.scss';

const CreateWalk = ({
  areas,
  tags,
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
  updateCreateWalkField,
  updateCreateWalkSelect,
  handleCreate,
  isCreated,
}) => {
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

  const date = Date();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreate();
  };

  console.log('isCreated : ', isCreated);

  if (isCreated) return <Redirect to="/my_hikes/" />;

  return (
    <main className="createWalk">
      <div className="createWalk_title">
        <img className="createWalk_create_logo" src={createLogo} alt="logo-create-walk" />
        <h2 className="createWalk_title_text">Ma nouvelle randonnée</h2>
      </div>
      <p className="createWalk_asterisk">(*) Champs obligatoires</p>
      <p>{date}</p>
      <form className="createWalk_form" onSubmit={handleSubmit}>
        <Field
          identifier="walkTitle"
          placeholder="titre de la randonnée"
          label="Titre *"
          value={walkTitle}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur titre : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <div className="createWalk_area">
          <SelectField
            className="createWalk_area_select"
            label="Région *"
            identifier="walkAreaId"
            options={areasList}
            value={walkAreaId}
            placeholder="Choix de la région"
            manageChange={(identifier, newValue) => {
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
              updateCreateWalkSelect(identifier, newValue);
            }}
          />
        </div>
        <div className="createWalk_tag">
          <p className="createWalk_tag_label">Thème (choix multiple possible)</p>
          <Select
            className="createWalk_tag_select"
            label="Thème (choix multiple possible)"
            identifier="walkTags"
            options={tagsList}
            placeholder="Thème(s)"
            isMulti
            onChange={(selectedTags) => {
              console.log(selectedTags);
              selectedTags.map((tag) => (
                // console.log(tag.value)
                updateCreateWalkSelect('walkTags', tag.value)
              ));
            }}
          />
        </div>
        <Field
          identifier="walkStartingPoint"
          placeholder="point de départ"
          label="Point de départ *"
          value={walkStartingPoint}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur point de départ : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <Field
          identifier="walkEndPoint"
          placeholder="point d'arrivée"
          label="Point d'arrivée (si différent du point de départ)"
          value={walkEndPoint}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur point d'arrivée : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <Field
          identifier="walkDate"
          placeholder="date et heure"
          label="Date et heure du départ *"
          type="datetime-local"
          min="2021-04-23T00:00"
          value={walkDate}
          changeField={(identifier, newValue) => {
            // console.log(`changeField sur date : identifier=${identifier}, newValue=${newValue}`);
            // console.log('heure', goodDate);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <SelectField
          identifier="walkDuration"
          placeholder="durée"
          label="Durée approximative *"
          value={walkDuration}
          options={durations}
          manageChange={(identifier, newValue) => {
            console.log(`changeField sur durée : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkSelect(identifier, newValue);
          }}
        />
        <Field
          identifier="walkDistance"
          placeholder="distance en kms"
          label="Nombre de kilomètres"
          type="number"
          value={walkDistance}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur distance : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <div className="createWalk_difficulty">
          <SelectField
            className="createWalk_difficulty_select"
            label="Niveau de difficulté *"
            identifier="walkDifficulty"
            options={difficulties}
            placeholder="Niveau de difficulté"
            manageChange={(identifier, newValue) => {
              console.log(`manageChange sur difficulté: identifier=${identifier}, newValue=${newValue}`);
              updateCreateWalkSelect(identifier, newValue);
            }}
          />
        </div>
        <Field
          identifier="walkElevation"
          placeholder="dénivelé"
          label="Dénivelé (en mètres)"
          type="number"
          value={walkElevation}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur dénivelé : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <Field
          identifier="walkNumberPeople"
          placeholder="nombre de personnes"
          label="Nombre de personnes maximum"
          type="number"
          value={walkNumberPeople}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur nb de participants : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <Field
          identifier="walkDescription"
          placeholder="description"
          label="Description / Infos pratiques *"
          value={walkDescription}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur description : identifier=${identifier}, newValue=${newValue}`);
            updateCreateWalkField(identifier, newValue);
          }}
        />
        <button type="submit" className="createWalk_submit">Valider</button>
      </form>
    </main>
  );
};

CreateWalk.propTypes = {
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
  walkTitle: PropTypes.string.isRequired,
  walkAreaId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  walkStartingPoint: PropTypes.string.isRequired,
  walkEndPoint: PropTypes.string,
  walkDate: PropTypes.string.isRequired,
  walkDuration: PropTypes.string.isRequired,
  walkDistance: PropTypes.string,
  walkElevation: PropTypes.string,
  walkNumberPeople: PropTypes.string,
  walkDescription: PropTypes.string.isRequired,
  updateCreateWalkField: PropTypes.func.isRequired,
  updateCreateWalkSelect: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  isCreated: PropTypes.bool.isRequired,
};

CreateWalk.defaultProps = {
  walkEndPoint: '',
  walkDistance: null,
  walkElevation: null,
  walkNumberPeople: null,
};

export default CreateWalk;
