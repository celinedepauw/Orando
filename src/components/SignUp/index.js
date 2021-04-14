import React from 'react';
import { Redirect } from 'react-router-dom';
import Field from 'src/components/Field';

import './signup.scss';


const SignUp = ({
  isLogged,
  email,
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
            updateAuthenticationField(identifier, newValue);
          }}
        />
      </form>
    </main>
  );
};
 
export default SignUp;
