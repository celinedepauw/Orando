import React from 'react';
import PropTypes from 'prop-types';

const Area = ({ id, name, color }) => (
  <div className="home_area">
    <h3 className="home_area_name">{name}</h3>
    <a href="" className="home_area_walks">C'est par ici !</a>
  </div>
);

Area.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Area;
