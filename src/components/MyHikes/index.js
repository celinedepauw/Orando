import React from 'react';
import PropTypes from 'prop-types';

import MyHikesSmall from 'src/containers/MyHikes/MyHikesSmall';

import './myHikes.scss';

const MyHikes = ({ user, loading }) => {
 console.log(user);
  return (
    <>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
      <main className="walks_user">
        <h2 className="walks_user_title">Mes randonnées organisées</h2>
        <div className="walks_user_list">
          {console.log(user.user.walks)}
          {user.user.walks.map((item) => (
            <MyHikesSmall key={item.id} {...item} />
          ))}
        </div>
      </main>
      )}
    </>
  );
};
MyHikes.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyHikes;
