import React from 'react';

import Field from 'src/components/Field';
import TextField from 'src/components/TextField';
import contactLogo from 'src/assets/images/email.png';

import './contactUser.scss';

const ContactUser = () => (
  <main className="contactUser">
    <div className="contactUser_title">
      <img className="contactUser_contact_logo" src={contactLogo} alt="logo-create-walk" />
      <h2 className="contactUser_title_text">Contacter XXX</h2>
    </div>
    <form className="contactUser_form">
      <Field
        identifier="subject"
        placeholder=""
        label="Sujet"
      />
      <TextField
        identifier="message"
        placeholder=""
        label="Votre message"
      />
      <button className="contactUser_button" type="submit">Envoyer</button>
    </form>
  </main>
);

export default ContactUser;
