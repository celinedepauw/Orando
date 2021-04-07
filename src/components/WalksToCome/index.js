import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sign from 'src/assets/icones/sign.svg';
import boot from 'src/assets/icones/boot.svg';

import WalkToComeSmall from 'src/components/WalksToCome/WalkToComeSmall';

import Loader from 'src/components/Loader';
import './walksToCome.scss';

const WalksToCome = ({ user, loadingUser, handleCancelParticipation }) => (
  <>
    {loadingUser && <div><Loader /></div>}
    {!loadingUser && (
      <main className="walks_to_come">
        <Link to="/account">
          <img className="walks_to_come_return_account" src={sign} alt="retour" />
        </Link>
        <div className="walks_to_come_title_content">
          <img className="walks_to_come_icon" src={boot} alt="icone" />
          <h2 className="walks_to_come_title">{user.incomingWalks.length} randonnée(s) à venir</h2>
        </div>
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


