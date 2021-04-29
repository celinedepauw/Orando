import React from 'react';
import PropTypes from 'prop-types';

import editLogo from 'src/assets/images/create.png';
import Field from 'src/components/Field';
import Select from 'react-select';
import SelectField from 'src/components/CreateWalk/select';

import './editWalk.scss';

const EditWalk = () => (
  <main className="editWalk">
    <div className="editWalk_title">
      <img className="editWalk_create_logo" src={editLogo} alt="logo-edit-walk" />
      <h2 className="editWalk_title_text">Modification de ma randonnée</h2>
    </div>
    <p className="createWalk_asterisk">(*) Champs obligatoires</p>
    <form className="editWalk_form">
      <Field />
      <SelectField />
      <Select />
      <Field />
      <Field />
      <Field />
      <SelectField />
      <Field />
      <SelectField />
      <Field />
      <Field />
      <Field />

    </form>
  </main>
);

export default EditWalk;
