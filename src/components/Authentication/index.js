import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from 'src/components/Field';
import welcome from 'src/assets/images/hiker.png';
import register from 'src/assets/images/route.png';
import './authentication.scss';

const Authentication = ({
  email,
  password,
  updateAuthenticationField,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  if (isLogged) return <Redirect to="/" />;
  return (
    <div className="authentication" onSubmit={handleSubmit}>
      <form className="authentication_form">
        <Field
          identifier="email"
          placeholder="toto@oclock.io"
          label="Adresse e-mail"
          value={email}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
            updateAuthenticationField(identifier, newValue);
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
            updateAuthenticationField(identifier, newValue);
          }}
        />
        <button type="submit" className="authentication_submit">Welcome <img className="authentication_submit_picture" src={welcome} alt="logo-welcome" /></button>
        <div className="authentication_inscription">
          <p className="authentication_text">Si vous n'avez pas encore de compte</p>
          <Link className="authentication_insciption_link" to="/register">
            <button type="button" className="authentication_inscription_button">Cliquez ici <img className="authentication_inscription_picture" src={register} alt="logo-welcome" /></button>
          </Link>
        </div>
      </form>
    </div>
  );
};

Authentication.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateAuthenticationField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Authentication;
