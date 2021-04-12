import React from 'react';
import PropTypes from 'prop-types';

import AreaSmall from 'src/containers/Home2/areaSmall';

import './home2.scss';

const Home2 = ({ areas }) => (
  <main className="home2">
    <h2 className="home2_title">Explorez toutes les randonnées disponibles dans votre région !</h2>
    <div className="home_areas_list">
      {areas.map((area) => (
        <AreaSmall key={area.id} {...area} numberOfWalks={area.walks.length} />
      ))}
    </div>
    <div className="home2_resume">
      Vous ne trouvez pas votre bonheur parmi les randonnées proposées ? Ce n'est pas grave !
      En cliquant sur le bouton ci-dessous (Proposez une randonnée) vous serez redirigé
      vers la page de création d'une randonnée, il n'y a plus qu'à ! Bonne balade sur notre site !!
    </div>
    <div className="home2_end">
      <p className="home2_go">A vous de jouer !</p>
      <a href="https://orando.me/o/walk/create">
        <button className="home2_button" type="button">Proposez une randonnée</button>
      </a>
    </div>
  </main>
);

Home2.propTypes = {
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home2;
