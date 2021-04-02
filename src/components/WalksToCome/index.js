import React from 'react';
import PropTypes from 'prop-types';

import WalkToComeSmall from 'src/components/WalksToCome/WalkToComeSmall';

import './walksToCome.scss';

const WalksToCome = ({ user, loading, handleCancelParticipation }) => {
   console.log(user.incomingWalks);
  return (
    <>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
      <main className="walks_to_come">
        <h2 className="walks_to_come_title">Mes randonnées à venir</h2>
        <div className="walks_to_come_list">
          {user.incomingWalks.map((item) => (
            <WalkToComeSmall
              key={item.walk.id}
              {...item.walk}
              handleCancelParticipation={handleCancelParticipation}
            />
          ))}
        </div>
      </main>
      )}
    </>
  );
};

WalksToCome.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleCancelParticipation: PropTypes.func.isRequired,
};
export default WalksToCome;
