import React from 'react';
import PropTypes from 'prop-types';

import ArchivedSmall from 'src/containers/Archived/ArchivedSmall';
import './archived.scss';

const Archived = ({ user, loadingUser }) => {
  console.log(user);

  return (
    <>
      {loadingUser && <div>Chargement en cours...</div>}
      {!loadingUser && (
      <div className="archived">
        <h2 className="archived_title">{user.archivedWalks.length} randonnée(s) passée(s)</h2>
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
  loadingUser: PropTypes.bool.isRequired,
};

export default Archived;
