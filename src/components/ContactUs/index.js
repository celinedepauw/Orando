import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import TextField from 'src/components/TextField';
import sign3 from 'src/assets/icones/sign3.svg';
import contactLogo from 'src/assets/images/email.png';

import './contactUs.scss';

const ContactUs = ({
  subject,
  email,
  message,
  isSent,
  handleContact,
  updateContactField,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };
  if (isSent) return <Redirect to="/" />;
  return (
    <main className="contactUs">
      <Link to="/">
        <img className="contactUs_home_return" src={sign3} alt="retour" />
      </Link>
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
        <TextField
          identifier="message"
          placeholder=""
          label="Votre message"
          value={message}
          required
          rows="10"
          changeField={(identifier, newValue) => {
            updateContactField(identifier, newValue);
          }}
        />
        <button className="contactUs_button" type="submit">Envoyer</button>
      </form>
    </main>
  );
};

ContactUs.propTypes = {
  subject: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isSent: PropTypes.bool.isRequired,
  handleContact: PropTypes.func.isRequired,
  updateContactField: PropTypes.func.isRequired,
};

export default ContactUs;
