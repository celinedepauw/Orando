import React from 'react';
import PropTypes from 'prop-types';
import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';
import SelectField from 'src/components/CreateWalk/select';

import './createWalk.scss';

const CreateWalk = ({
  areas,
  tags,
  walkTitle,
  updateCreateWalkField,
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
    { value: 'facile', label: 'Facile' },
    { value: 'moyen', label: 'Moyen' },
    { value: 'difficile', label: 'Difficile' },
  ];

  return (
    <main className="createWalk">
      <div className="createWalk_title">
        <img className="createWalk_create_logo" src={createLogo} alt="logo-create-walk" />
        <h2 className="createWalk_title_text">Ma nouvelle randonnée</h2>
      </div>
      <p className="createWalk_asterisk">(*) Champs obligatoires</p>
      <form className="createWalk_form">
        <Field
          identifier="walkTitle"
          placeholder="titre de la randonée"
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
            identifier="area"
            options={areasList}
            placeholder="Choix de la région"
            manageChange={(identifier, newValue) => {
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
            }}
          />
        </div>
        <div className="createWalk_tag">
          <p className="createWalk_tag_label">Thème (choix multiple possible)</p>
          <Select
            className="createWalk_tag_select"
            label="Thème (choix multiple possible)"
            identifier="tags"
            options={tagsList}
            placeholder="Thème(s)"
            isMulti
            onChange={(selectedTags) => {
              console.log(selectedTags);
              selectedTags.map((tag) => (
                console.log(tag.value)
              ));
            }}
          />
        </div>
        <Field
          label="Point de départ *"
        />
        <Field
          label="Point d'arrivée (si différent du point de départ)"
        />
        <Field
          label="Date et heure du départ *"
          type="datetime-local"
        />
        <Field
          label="Durée approximative (en heures) *"
        />
        <Field
          label="Nombre de kilomètres"
        />
        <div className="createWalk_difficulty">
          <SelectField
            className="createWalk_difficulty_select"
            options={difficulties}
            placeholder="Niveau de difficulté..."
            label="Niveau de difficulté *"
            identifier="difficulty"
            manageChange={(identifier, newValue) => {
              console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
            }}
          />
        </div>
        <Field
          label="Dénivelé (en mètres)"
        />
        <Field
          label="Nombre de personnes maximum"
        />
        <Field
          label="Description / Infos pratiques *"
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
  updateCreateWalkField: PropTypes.func.isRequired,
};

export default CreateWalk;
