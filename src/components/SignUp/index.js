import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import Field from 'src/components/Field';
import welcome from 'src/assets/images/hiker.png';
import SelectField from 'src/components/SignUp/select';
import InputPicture from 'src/components/SignUp/inputPicture';

import './signup.scss';


const SignUp = ({
  email,
  alias,
  password,
  lastname,
  firstname,
  picture,
  areas,
  userArea,
  updateSignUp,
  handleSignUp,
  updateAvatar,
  isSuccess,

}) => {
  const areasListSelect = areas.map((area) => (
    {
      value: area.id,
      label: area.name,
    }
  ));
  const handleSubmitSignUp = (evt) => {
    evt.preventDefault();
    handleSignUp();
  }
  console.log('toto');
  if (isSuccess) return <Redirect to="/authentication" />;
  return (
    <main className="signUp" onSubmit={handleSubmitSignUp}>
      <form className="signUp_form">
        <SelectField
          label="votre région"
          identifier="userArea"
          options={areasListSelect}
          value={userArea}
          placeholder="selectionner votre région"
          manageChange={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`manageChange sur area : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="email"
          placeholder="toto@oclock.io"
          label="Adress e-mail"
          type="email"
          value={email}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="alias"
          placeholder="toto-natureLover"
          label="Pseudo"
          value={alias}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur pseudo : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="lastname"
          placeholder="Toto"
          label="Nom"
          value={lastname}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
            console.log(`changeField sur nom : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <Field
          identifier="firstname"
          placeholder="Orando"
          label="Prénom"
          value={firstname}
          changeField={(identifier, newValue) => {
            updateSignUp(identifier, newValue);
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
            updateSignUp(identifier, newValue);
            console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
          }}
        />
        <InputPicture
          identifier="picture"
          placeholder=""
          label="Photo de profile"
          file={picture}
          manageChangePicture={(file) => {
            updateAvatar(file);
            console.log(`updateAvatar sur picture : file=${file}`);
          }}
        />
        <button type="submit" className="signUp_form_submit">Welcome <img className="signUp_form_submit_picture" src={welcome} alt="logo-welcome" /></button>
      </form>
    </main>
  );
};
 
SignUp.propTypes = {
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  userArea: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  updateSignUp: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};



export default SignUp;
