import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import contactLogo from 'src/assets/images/email.png';

import './contactUs.scss';

const ContactUs = ({
  subject,
  email,
  message,
  handleContact,
  updateContactField,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };
  return (
    <main className="contactUs">
      <div className="contactUs_title">
        <img className="contactUs_contact_logo" src={contactLogo} alt="logo-create-walk" />
        <h2 className="contactUs_title_text">Nous contacter</h2>
      </div>
      <form className="contactUs_form" onSubmit={handleSubmit}>
        <Field
          identifier="subject"
          placeholder=""
          label="Sujet"
          value={subject}
          required
          changeField={(identifier, newValue) => {
            console.log(`changeField sur sujet : identifier=${identifier}, newValue=${newValue}`);
            updateContactField(identifier, newValue);
          }}
        />
        <Field
          identifier="email"
          placeholder=""
          label="Email"
          value={email}
          required
          type="email"
          changeField={(identifier, newValue) => {
            console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
            updateContactField(identifier, newValue);
          }}
        />
        <Field
          identifier="message"
          placeholder=""
          label="Votre message"
          value={message}
          required
          changeField={(identifier, newValue) => {
            console.log(`changeField sur message : identifier=${identifier}, newValue=${newValue}`);
            updateContactField(identifier, newValue);
          }}
        />
        <button className="contactUs_button" type="submit">Envoyer</button>
      </form>
    </main>
  );
};

ContactUs.prototypes = {
  subject: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleContact: PropTypes.func.isRequired,
  updateContactField: PropTypes.func.isRequired,
};

export default ContactUs;
