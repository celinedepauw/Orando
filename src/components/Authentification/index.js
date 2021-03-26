import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

const Authentification = ({ 
  email,
  password,
  updateAuthentificationField
}) => (
  <div className="authentification">
    <form className="authentification_form">
      <Field
        identifier="email"
        placeholder="toto@oclock.io"
        label="Adresse e-mail"
        value={email}
        changeField={(identifier, newValue) => {
          console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          updateAuthentificationField(identifier, newValue);
        }}
      />
      <Field
        identifier="password"
        placeholder=""
        label="Mot de passe"
        type="password"
        value={password}
        changeField={(identifier, newValue) => {
          console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
          updateAuthentificationField(identifier, newValue);
        }}
      />
      <button type="submit" className="authentification_submit">Envoyer</button>
    </form>
  </div>
);

Authentification.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateAuthentificationField: PropTypes.func.isRequired,
};

export default Authentification;
