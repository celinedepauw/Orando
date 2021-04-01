import React from 'react';

import './list.scss';

import photo from 'src/assets/images/Moi.jpg';

const List = () => (
  <div className="list">
    <h2 className="list_title">Liste des participants de la rando</h2>
    <img className="list_image" src={photo} alt="" />
    <div className="list_button">
      <a className="list_nickname" href="#">Froufrou64</a>
      <h3>Titre rando</h3>
    </div>

    <div>
      <img className="list_image" src={photo} alt="" />
      <div className="list_button">
        <a className="list_nickname" href="#">babtou</a>
        <h3>Titre rando</h3>
      </div>
    </div>

    <div>
      <img className="list_image" src={photo} alt="" />
      <div className="list_button">
        <a className="list_nickname" href="#">Nikita</a>
        <h3>Titre rando</h3>
      </div>

    </div>
    <div>
      <img className="list_image" src={photo} alt="" />
      <div className="list_button">
        <a className="list_nickname" href="#">adonis</a>
        <h3>Titre rando</h3>
      </div>
    </div>
  </div>
);

export default List;
