import React from 'react';

import photo from 'src/assets/images/Moi.jpg';

const ContactUser = () => (
  <form className="form">
    <img className="about_us_image" src={photo} alt="" />
    <span className="form_nickname">Froufrou712</span>
    <input className="form_text" type="text" />
    <button className="form_button" type="submit">Envoyer</button>
  </form>
);

export default ContactUser;
