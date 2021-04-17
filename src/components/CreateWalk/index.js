import React from 'react';
import PropTypes from 'prop-types';
import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';

import './createWalk.scss';

const CreateWalk = ({ areas }) => {
  const areasList = areas.map((item) => (
    {
      value: item.name,
      label: item.name,
    }
  ));

  const tags = [
    { value: 'en-famille', label: 'En Famille' },
    { value: 'urbaine', label: 'Urbaine' },
    { value: 'montagne', label: 'Montagne' },
  ];

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
          label="Titre *"
        />
        <Select className="createWalk_area" options={areasList} placeholder="Région..." />

        <Select className="createWalk_tag" options={tags} placeholder="Thème(s)..." isMulti />

        <Field
          label="Point de départ *"
        />
        <Field
          label="Point d'arrivée (si différent du point de départ)"
        />
        <Field
          label="Date et heure de départ *"
        />
        <Field
          label="Durée approximative (en heures) *"
        />
        <Field
          label="Nombre de kilomètres"
        />
        <Select className="createWalk_difficulty" options={difficulties} placeholder="Niveau de difficulté..." />

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
    }).isRequired,
  ).isRequired,
};

export default CreateWalk;
