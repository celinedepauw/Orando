import React from 'react';
import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';

import './createWalk.scss';

const CreateWalk = () => {
  const options = [
    { value: 'auvergne', label: 'Auvergne' },
    { value: 'bourgogne', label: 'Bourgogne' },
    { value: 'PACA', label: 'PACA' },
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
        <Select options={options} />

        <Field
          label="Thème (choix multiple possible) *"
        />
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
          label="Durée approximative *"
        />
        <Field
          label="Nombre de kilomètres"
        />
        <Field
          label="Niveau de difficulté *"
        />
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

export default CreateWalk;
