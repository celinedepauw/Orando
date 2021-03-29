import React from 'react';

import photo from 'src/assets/images/Moi.jpg';

const AboutUs = () => (
  <div className="about-us">
    <h1 className="about-us-title">Qui sommes-nous?</h1>
    <img className="about-us-image" src={photo} alt="présentation" />
    <p>Blabla</p>
  </div>
);

export default AboutUs;
