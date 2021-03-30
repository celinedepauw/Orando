import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

const Authentification = ({
  email,
  password,
  updateAuthentificationField,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  if (isLogged) return <Redirect to="/" />;
  return (
    <div className="authentification" onSubmit={handleSubmit}>
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
        <button type="submit" className="authentification_submit">Ok</button>
      </form>
    </div>
  );
};

Authentification.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateAuthentificationField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Authentification;
