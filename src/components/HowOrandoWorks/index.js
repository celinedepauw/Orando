import React from 'react';
import tool from 'src/assets/icones/tool.svg';

import './howorandoworks.scss';

const HowOrandoWorks = () => (
  <main className="howWorks">
    <div className="howWorks_title_content">
      <img className="howWorks_title_icon" src={tool} alt="icone du titre" />
      <h2 className="howWorks_title">Comment profiter pleinement du site O'rando</h2>
    </div>
   
  </main>

);

export default HowOrandoWorks;
