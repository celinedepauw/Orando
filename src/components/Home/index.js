import React from 'react';
import PropTypes from 'prop-types';

import WalkSmall from 'src/containers/Home/walkSmall';

import './home.scss';

const Home = ({ walks }) => (
  <main className="home">
    <h2 className="home_title">Explorez toutes les randonnées disponibles !</h2>
    <div className="home_walks_list">
      {walks.map((walk) => (
        <WalkSmall key={walk.id} {...walk} />
      ))}
    </div>
    <div className="home_resume">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem tempore nemo veritatis incidunt, repellendus cumque iusto non porro voluptatum corporis sapiente maiores magni rem! Vel eveniet numquam odit atque?
    Libero nisi maxime, amet nesciunt labore incidunt nulla quo velit autem. Nostrum nihil placeat quam. Consequatur molestiae, ut inventore quibusdam voluptatibus, laudantium ipsum debitis aspernatur facere esse, odio at explicabo.
    Dignissimos harum itaque eaque molestiae veritatis consequuntur ut culpa suscipit recusandae magnam assumenda, dolorem ad reprehenderit aperiam repellat officiis modi numquam delectus est tempore animi dolorum? Adipisci ducimus suscipit quidem?
    </div>
    <div className="home_end">
      <p className="home_go">A vous de jouer !</p>
      <button className="home_button" type="button">Proposez une randonnée</button>
    </div>
  </main>
);

Home.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Home;
