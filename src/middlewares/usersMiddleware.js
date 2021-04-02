import axios from 'axios';

import {
  saveUser,
  LOG_IN,
  saveUserAuth,
  CHECK_USER,
  LOG_OUT,
} from 'src/actions/users';


const usersMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans usersMiddleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().userInfo;
      axios.post('https://orando.me/o/api/login_check', {
        username: email,
        password: password,
      })
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(saveUserAuth(
              true,
            ));
            // to save the token in the localStorage
            const authenticationToken = response.data.token;
            const currentUserId = response.data.data.id;
            localStorage.setItem('Token', authenticationToken);
            localStorage.setItem('currentUserId', currentUserId);
            // i send a request to get the user info at this time
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                // console.log(response.data);
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });

            // fonction requet axios user
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case CHECK_USER: {
      const authenticationToken = localStorage.getItem('Token');
      console.log('mon token', authenticationToken);
      const currentUserId = localStorage.getItem('currentUserId');
      if (!authenticationToken || !currentUserId) {
        localStorage.clear();
        store.dispatch(saveUserAuth(
          false,
        ));
        next(action);
        break;
      }
      axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
        .then((response) => {
          // console.log(response.data);
          if (response.status === 200) {
            store.dispatch(saveUser(response.data));
            store.dispatch(saveUserAuth(true));
            console.log('reponse quand je checkuser', response);
          }
          else {
            localStorage.clear();
            store.dispatch(saveUserAuth(false));
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case LOG_OUT: {
      localStorage.clear();
      store.dispatch(saveUserAuth(false));
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default usersMiddleware;
