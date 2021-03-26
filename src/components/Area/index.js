import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './area.scss';

const Area = ({ areas, loading }) => {
  const { id } = useParams();

  const area = areas.find((item) => item.id == id);

  return (
    <div>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <main className="area">
          <h2 className="area_name">{area.name}</h2>
        </main>
      )}
    </div>
  );
};

Area.propTypes = {
  loading: PropTypes.bool.isRequired,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Area;
