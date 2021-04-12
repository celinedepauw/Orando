import React from 'react';
import tool from 'src/assets/icones/tool.svg';
import image1 from 'src/assets/images/search-by-area.png';
import image2 from 'src/assets/images/area-list-hikes.png';
import image3 from 'src/assets/images/hike-participate.png';
import image4 from 'src/assets/images//incomingwalks-list.png';

import './howorandoworks.scss';

const HowOrandoWorks = () => (
  <main className="howWorks">
    <div className="howWorks_title_content">
      <img className="howWorks_title_icon" src={tool} alt="icone du titre" />
      <h2 className="howWorks_title">Comment profiter pleinement du site O'rando</h2>
    </div>
    <div className="howWorks_select-area">
      <p className="howWorks_select-area_text">
        Dès la page d'acceuil, accèdez à la liste des régions vous proposant une ou plusieurs randonnée(s).<br/>
        Il vous suffit de cliquer sur la région qui vous interesse.
      </p>
      <img className="howWorks_select-area_photo" src={image1} alt="illustration explication" />
    </div>
    <div className="howWorks_select-area">
      <p className="howWorks_select-area_text">
        Choississez une randonnée, cliquez sur en savoir plus pour accèder aux détails d'une randonnée et avoir la possibilité de participer.
      </p>
      <img className="howWorks_select-area_photo" src={image2} alt="illustration explication" />
    </div>
    <div className="howWorks_select-area">
      <p className="howWorks_select-area_text">
        Vous avez ainsi accès au détail de la randonnée proposée: point de départ, niveau de difficulté etc.<br/>
        En bas de page, vous avez la possibilité de participer à cette randonnée.
      </p>
      <img className="howWorks_select-area_photo" src={image3} alt="illustration explication" />
    </div>
    <div className="howWorks_select-area">
      <p className="howWorks_select-area_text">
        Vous pouvez consulter cette même randonnée directement dans votre compte dans "randonnées à venir".<br/>
        Vous avez même la possibilité d'annuler votre participation.
      </p>
      <img className="howWorks_select-area_photo" src={image4} alt="illustration explication" />
    </div>
  </main>

);

export default HowOrandoWorks;
