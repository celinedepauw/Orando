import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AreaSmall = ({ id, name, numberOfWalks }) => (
  <Link to={`/areas/${id}`} className="areasmall">
    <h3 className="home_area_name">{name}</h3>
    {numberOfWalks === 0 ? <p className="home_area_noWalk">Pas encore de randonnée...</p> : <p className="home_area_number">{numberOfWalks} randonnée(s)</p>}
  </Link>
);

AreaSmall.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numberOfWalks: PropTypes.number.isRequired,
};

export default AreaSmall;
