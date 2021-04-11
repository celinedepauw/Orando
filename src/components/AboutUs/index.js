import React from 'react';

import jbAvatar from 'src/assets/images/wolf.png';
import celineAvatar from 'src/assets/images/owl.png';
import alexAvatar from 'src/assets/icones/fox.svg';
import pyAvatar from 'src/assets/icones/bear.svg';
import bereniceAvatar from 'src/assets/icones/ecureuil.png';

import jb from 'src/assets/images/jb.jpg';
import celine from 'src/assets/images/celine.jpg';
import alex from 'src/assets/images/alexandrine.png';
import berenice from 'src/assets/images/berenice.jpg';

import linkedin from 'src/assets/images/linkedin.png';

import './aboutUs.scss';

const AboutUs = () => (
  <div className="about_us">
    <h2 className="about_us_title">Qui sommes-nous?</h2>
    <div className="about_us_team">
      <div className="about_us_person">
        <h3 className="about_us_name">Céline Depauw</h3>
        <h4 className="about_us_role">Product Owner - Team Front</h4>
        <p className="about_us_nickname">La Randonneuse
          <img className="about_us_avatar" src={celineAvatar} alt="profile-avatar" />
        </p>
        <img className="about_us_image" src={celine} alt="profile" />
        <p className="about_us_text">Toujours partante pour de nouvelles aventures, elle aime sortir des sentiers battus.</p>
        <a href="https://www.linkedin.com/in/celinedepauw/"><img className="about_us_linkedin" src={linkedin} alt="linkedin" /></a>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_name">Alexandrine Heutte</h3>
        <h4 className="about_us_role">Scrum Master - Team Front</h4>
        <p className="about_us_nickname">L'Aventurière
          <img className="about_us_avatar" src={alexAvatar} alt="profile-avatar" />
        </p>
        <img className="about_us_image" src={alex} alt="profile" />
        <p className="about_us_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="https://www.linkedin.com/in/alexandrine-heutte-71830a10a/"><img className="about_us_linkedin" src={linkedin} alt="linkedin" /></a>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_name">Jean-Baptiste Lafont</h3>
        <h4 className="about_us_role">Lead Front</h4>
        <p className="about_us_nickname">Le Photographe
          <img className="about_us_avatar" src={jbAvatar} alt="profile-avatar" />
        </p>
        <img className="about_us_image" src={jb} alt="profile" />
        <p className="about_us_text">Il est tombé dans la photo en trébuchant... Depuis, il immortalise ses balades... mais en regardant où il met les pieds.</p>
        <a href="https://www.linkedin.com/in/berenice-sae/"><img className="about_us_linkedin" src={linkedin} alt="linkedin" /></a>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_name">Bérénice Saé</h3>
        <h4 className="about_us_role">Lead Back</h4>
        <p className="about_us_nickname">La Promeneuse
          <img className="about_us_avatar" src={bereniceAvatar} alt="profile-avatar" />
        </p>
        <img className="about_us_image" src={berenice} alt="profile" />
        <p className="about_us_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="about_us_linkedin" src={linkedin} alt="linkedin" />
      </div>
      <div className="about_us_person">
        <h3 className="about_us_name">Pierre-Yves Loukakou</h3>
        <h4 className="about_us_role">Git Master - Team Back</h4>
        <p className="about_us_nickname">Le Cascadeur
          <img className="about_us_avatar" src={pyAvatar} alt="profile-avatar" />
        </p>
        <img className="about_us_image" src={jb} alt="profile" />
        <p className="about_us_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="about_us_linkedin" src={linkedin} alt="linkedin" />
      </div>
    </div>
  </div>
);

export default AboutUs;
