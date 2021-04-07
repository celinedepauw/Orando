import React from 'react';
import PropTypes from 'prop-types';
import MyHikesSmall from 'src/containers/MyHikes/MyHikesSmall';

import Loader from 'src/components/Loader';
import './myHikes.scss';

const MyHikes = ({ user, loadingUser }) => (
  <>
    {loadingUser && <div> <Loader /> </div>}
    {!loadingUser && (
      <main className="walks_user">
        <h2 className="walks_user_title">{user.user.walks.length} randonnée(s) organisée(s)</h2>
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
MyHikes.propTypes = {
  user: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default MyHikes;
