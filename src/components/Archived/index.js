import React from 'react';
import PropTypes from 'prop-types';

import ArchivedSmall from 'src/containers/Archived/ArchivedSmall';
import './archived.scss';

const Archived = ({ user, loading }) => {
  console.log(user);

  return (
    <>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
      <div className="archived">
        <h2 className="archived_title">Randos passées</h2>
        <div className="archived_infos_list">
          {user.archivedWalks.map((item) => (
            <ArchivedSmall key={item.walk.id} {...item.walk} />
          ))}
        </div>
      </div>
      )};
    </>
  );
};

Archived.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Archived;
