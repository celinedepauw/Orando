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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem tempore nemo veritatis incidunt, repellendus cumque iusto non porro voluptatum corporis sapiente maiores magni rem! Vel eveniet numquam odit atque?
    Libero nisi maxime, amet nesciunt labore incidunt nulla quo velit autem. Nostrum nihil placeat quam. Consequatur molestiae, ut inventore quibusdam voluptatibus, laudantium ipsum debitis aspernatur facere esse, odio at explicabo.
    Dignissimos harum itaque eaque molestiae veritatis consequuntur ut culpa suscipit recusandae magnam assumenda, dolorem ad reprehenderit aperiam repellat officiis modi numquam delectus est tempore animi dolorum? Adipisci ducimus suscipit quidem?
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
