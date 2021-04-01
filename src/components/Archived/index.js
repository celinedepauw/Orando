import React from 'react';
import PropTypes from 'prop-types';

import './archived.scss';

const Archived = () => (
  <div className="archived">
    <h2 className="archived_title">Randos passées</h2>
    <div className="archived_infos">
      <h3 className="archived_infos_title">Titre de la rando</h3>
      <p className="archived_infos_area">Région</p>
      <p className="archived_infos_date">Date</p>
      <p className="archived_infos_time">Durée approximative</p>
      <p className="archived_infos_level">Niveau de difficulté</p>
      <button className="archived_infos_button" type="submit">Voir détails</button>
    </div>
  </div>
);

export default Archived;
