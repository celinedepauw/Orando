import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './signup.scss';


const SignUp = ({
  isLogged,
  email,
  alias,
  password,
  lastname,
  firstname,
  picture,
}) => {
  console.log('toto');
  if (isLogged) return <Redirect to="/authentication" />;
  return (
    <main className="signUp">
      <form className="signUp_form">
        <h2>select avec librairie?</h2>
        <Field
          identifier="email"
          placeholder="toto@oclock.io"
          label="Adress e-mail"
          value={email}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="alias"
          placeholder="toto-natureLover"
          label="Pseudo"
          value={alias}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur pseudo : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="lastname"
          placeholder="Toto"
          label="Nom"
          value={lastname}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur nom : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="firstname"
          placeholder="Orando"
          label="Prénom"
          value={firstname}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur prénom : identifier=${identifier}, newValue=${newValue}`);
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
          }}
        />
        <Field
          identifier="picture"
          placeholder=""
          label="Photo de profile"
          type="file"
          value={picture}
          changeField={(identifier, newValue) => {
            console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
      </form>
    </main>
  );
};
 
SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  picture: PropTypes.string,
};

SignUp.defaultProps = {
  picture: null,
};

export default SignUp;
