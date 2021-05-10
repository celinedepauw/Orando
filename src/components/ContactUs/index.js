import React from 'react';

import Field from 'src/components/Field';
import contactLogo from 'src/assets/images/email.png';

import './contactUs.scss';

const ContactUs = () => (
  <main className="contactUs">
    <div className="contactUs_title">
      <img className="contactUs_contact_logo" src={contactLogo} alt="logo-create-walk" />
      <h2 className="contactUs_title_text">Nous contacter</h2>
    </div>
    <form className="contactUs_form">
      <Field
        identifier=""
        placeholder=""
        label="Sujet"
        value=""
        changeField=""
      />
      <Field
        identifier=""
        placeholder=""
        label="Email"
        value=""
        changeField=""
      />
      <Field
        identifier=""
        placeholder=""
        label="Votre message"
        value=""
        changeField=""
      />
      <button className="contactUs_button" type="submit">Envoyer</button>
    </form>
  </main>
);

export default ContactUs;
