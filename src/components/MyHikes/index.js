import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sign3 from 'src/assets/icones/sign3.svg';
import MyHikesSmall from 'src/containers/MyHikes/MyHikesSmall';
import pickaxe from 'src/assets/icones/pickaxe.svg';

import Loader from 'src/components/Loader';
import './myHikes.scss';

const MyHikes = ({ user, loadingUser }) => (
  <>
    {loadingUser && <div> <Loader /> </div>}
    {!loadingUser && (
      <main className="walks_user">
        <Link to="/account">
          <img className="walks_user_return_account" src={sign3} alt="retour" />
        </Link>
        <div className="walks_user_title_content">
          <img className="walks_user_icon" src={pickaxe} alt="icone" />
          <h2 className="walks_user_title">{user.user.walks.length} randonnée(s) organisée(s)</h2>
        </div>
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
