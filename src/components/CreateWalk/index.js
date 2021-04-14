import React from 'react';
import createLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';

import './createWalk.scss';

const CreateWalk = () => (
  <main className="createWalk">
    <div className="createWalk_title">
      <img className="createWalk_create_logo" src={createLogo} alt="logo-create-walk" />
      <h2 className="createWalk_title_text">Ma nouvelle randonnée</h2>
    </div>
    <p className="createWalk_asterisk">(*) Champs obligatoires</p>
    <form className="createWalk_form">
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <button type="submit" className="createWalk_submit">Valider</button>
    </form>
  </main>
);

export default CreateWalk;
