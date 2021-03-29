import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import WalkSmall2 from 'src/components/Area/WalkSmall2';

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
          <div className="area_walks_list">
            {area.walks.map((item) => (
              <WalkSmall2 key={item.id} {...item} />
            ))}
          </div>
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
