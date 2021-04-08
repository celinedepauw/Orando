import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import { Link } from 'react-router-dom';
import ArchivedSmall from 'src/containers/Archived/ArchivedSmall';
import footprints from 'src/assets/icones/footprints.svg';
import sign3 from 'src/assets/icones/sign3.svg';
import './archived.scss';

const Archived = ({ user, loadingUser }) => (
  <>
    {loadingUser && <div><Loader /></div>}
    {!loadingUser && (
      <div className="archived">
        <Link to="/account">
          <img className="archived_return_account" src={sign3} alt="retour" />
        </Link>
        <div className="archived_title_content">
          <img className="archived_icon" src={footprints} alt="icone" />
          <h2 className="archived_title">{user.archivedWalks.length} randonnée(s) passée(s)</h2>
        </div>
        <div className="archived_infos_list">
          {user.archivedWalks.map((item) => (
            <ArchivedSmall key={item.walk.id} {...item.walk} />
          ))}
        </div>
      </div>
    )};
  </>
);

Archived.propTypes = {
  user: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default Archived;
