import axios from 'axios';

import {
  FETCH_USER,
  saveUser,
  LOG_IN,
  saveUserAuth,
} from 'src/actions/users';

const usersMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans usersMiddleware: ', action);
  switch (action.type) {
    // because of authentification, the request of user informations have to do in log_in
    /*
    case FETCH_USER: {
      // to get information about token and id user
      // back have to send the id with the token
      // const {token} = localStorage.getItem('token');
      const { currentUserId } = store.getState().userInfo;
      console.log(currentUserId);
      // console.log('il faut récupérer les randonnées');
      axios.get(`http://orando.me/back/api/users/${currentUserId}`)
        // send header information about token to the back
        // axios.get (`url/${id}`,
        // {
        //   headers: { Authorization: `Bearer ${token}`,
        //    },
        // },
        // )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    */
    case LOG_IN: {
      const { email, password } = store.getState().userInfo;
      axios.post('http://orando.me/back/api/login_check', {
        username: email,
        password: password,
      })
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(saveUserAuth(
              true,
              response.data.token,
              response.data.data.id,
            ));
            // to save the token in the localStorage
            localStorage.setItem('Token', response.data.token);
            const { currentUserId } = store.getState().userInfo;
            console.log(currentUserId);
            // console.log('il faut récupérer les randonnées');
            axios.get(`http://orando.me/back/api/users/${currentUserId}`)
              // send header information about token to the back
              // axios.get (`url/${id}`,
              // {
              //   headers: { Authorization: `Bearer ${token}`,
              //    },
              // },
              // )
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
    default:
      next(action);
  }
};
export default usersMiddleware;
