import React from 'react';

import Field from 'src/components/Field';

const Authentification = () => (
  <div className="authentification">
    <form className="authentification_form">
      <Field
        identifier="email"
        placeholder="toto@oclock.io"
        label="Adresse e-mail"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
        }}
      />
      <Field
        identifier="password"
        placeholder=""
        label="Mot de passe"
        type="password"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
        }}
      />
      <button type="submit" className="authentification_submit">Envoyer</button>
    </form>
  </div>
);

export default Authentification;
