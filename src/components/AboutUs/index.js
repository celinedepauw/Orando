import React from 'react';

import jb from 'src/assets/images/Moi.jpg';
import celine from 'src/assets/images/celine-orando.jpg';
import alex from 'src/assets/icones/fox.svg';
import py from 'src/assets/icones/bear.svg';
import berenice from 'src/assets/icones/ecureuil.png';

import './aboutUs.scss';

const AboutUs = () => (
  <div className="about_us">
    <h2 className="about_us_title">Qui sommes-nous?</h2>
    <div className="about_us_team">
      <div className="about_us_person">
        <h3 className="about_us_role">Product Owner - Team Front</h3>
        <h4 className="about_us_name">Céline D</h4>
        <img className="about_us_image" src={celine} alt="" />
        <p className="about_us_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
        </p>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_role">Scrum Master - Team Front</h3>
        <h4 className="about_us_name">Alexandrine H</h4>
        <img className="about_us_image" src={alex} alt="" />
        <p className="about_us_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
        </p>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_role">Lead Front</h3>
        <h4 className="about_us_name">Jean-Baptiste L</h4>
        <img className="about_us_image" src={jb} alt="" />
        <p className="about_us_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
      </p>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_role">Lead Back</h3>
        <h4 className="about_us_name">Bérénice S</h4>
        <img className="about_us_image" src={berenice} alt="" />
        <p className="about_us_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
        </p>
      </div>
      <div className="about_us_person">
        <h3 className="about_us_role">Git Master - Team Back</h3>
        <h4 className="about_us_name">Pierre-Yves L</h4>
        <img className="about_us_image" src={py} alt="" />
        <p className="about_us_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
