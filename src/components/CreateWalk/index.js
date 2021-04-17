import React from 'react';
import PropTypes from 'prop-types';
import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';

import './createWalk.scss';

const CreateWalk = ({ areas, tags }) => {
  const areasList = areas.map((area) => (
    {
      value: area.name,
      label: area.name,
    }
  ));

  const tagsList = tags.map((tag) => (
    {
      value: tag.name,
      label: tag.name,
    }
  ));

  const days = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
  ];

  const months = [
    { value: 'janvier', label: 'janvier' },
    { value: 'février', label: 'février' },
    { value: 'mars', label: 'mars' },
    { value: 'avril', label: 'avril' },
    { value: 'mai', label: 'mai' },
    { value: 'juin', label: 'juin' },
    { value: 'juillet', label: 'juillet' },
    { value: 'aout', label: 'août' },
    { value: 'septembre', label: 'septembre' },
    { value: 'octobre', label: 'octobre' },
    { value: 'novembre', label: 'novembre' },
    { value: 'decembre', label: 'decembre' },
  ];

  const years = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
  ];

  const hours = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
  ];

  const minutes = [
    { value: '00', label: '00' },
    { value: '15', label: '15' },
    { value: '30', label: '30' },
    { value: '45', label: '45' },
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
        <div className="createWalk_area">
          <p className="createWalk_area_label">Région *</p>
          <Select className="createWalk_area_select" options={areasList} placeholder="Région" />
        </div>
        <div className="createWalk_tag">
          <p className="createWalk_tag_label">Thème (choix multiple possible)</p>
          <Select className="createWalk_tag_select" options={tagsList} placeholder="Thème(s)" isMulti />
        </div>
        <Field
          label="Point de départ *"
        />
        <Field
          label="Point d'arrivée (si différent du point de départ)"
        />
        <Field
          label="Date *"
          type="date"
          required
        />
        <Field
          label="Heure du départ *"
          type="time"
          required
        />
        <Field
          label="Durée approximative (en heures) *"
        />
        <Field
          label="Nombre de kilomètres"
        />
        <div className="createWalk_difficulty">
          <p className="createWalk_difficulty_label">Niveau de difficulté *</p>
          <Select className="createWalk_difficulty_select" options={difficulties} placeholder="Niveau de difficulté..." />
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
};

export default CreateWalk;
