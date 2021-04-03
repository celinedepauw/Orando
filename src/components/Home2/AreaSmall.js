import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AreaSmall = ({ id, name, numberOfWalks }) => (
  <Link to={`/areas/${id}`} className="home_area">
    <div>
      <h3 className="home_area_name">{name}</h3>
      <p>{numberOfWalks} randonnée(s)</p>
    </div>
  </Link>
);

AreaSmall.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numberOfWalks: PropTypes.number.isRequired,
};

export default AreaSmall;
