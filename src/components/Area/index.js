import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import sign3 from 'src/assets/icones/sign3.svg';

import WalkSmall2 from 'src/components/Area/WalkSmall2';
import Loader from 'src/components/Loader';
import './area.scss';

const Area = ({ areas, loadingAreas }) => {
  const { id } = useParams();
  const area = areas.find((item) => item.id == id);

  return (
    <div>
      {loadingAreas && <div><Loader /></div>}
      {!loadingAreas && (
        <main className="area">
          <Link to="/">
            <img className="area_home_return" src={sign3} alt="retour" />
          </Link>
          <h2 className="area_name">{area.name}</h2>
            {area.walks.length === 0 ? <><h3 className="area_walks">Il n'y a pas encore de randonnées organisées pour cette région, n'hésitez pas à proposer la votre !</h3><button className="area_add_walk_button" type="button">Proposer une randonnée</button></> : <h3 className="area_walks">Bientôt <span className="area_numberOfWalks">{area.walks.length} </span>randonnée(s) près de chez vous !</h3>}
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
  loadingAreas: PropTypes.bool.isRequired,
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Area;
