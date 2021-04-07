import React from 'react';
import PropTypes from 'prop-types';

import WalkToComeSmall from 'src/components/WalksToCome/WalkToComeSmall';

import Loader from 'src/components/Loader';
import './walksToCome.scss';

const WalksToCome = ({ user, loadingUser, handleCancelParticipation }) => (
  <>
    {loadingUser && <div><Loader /></div>}
    {!loadingUser && (
      <main className="walks_to_come">
        <h2 className="walks_to_come_title">{user.incomingWalks.length} randonnée(s) à venir</h2>
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

WalksToCome.propTypes = {
  user: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
  handleCancelParticipation: PropTypes.func.isRequired,
};
export default WalksToCome;


