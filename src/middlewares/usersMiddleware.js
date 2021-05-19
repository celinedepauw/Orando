import axios from 'axios';

import {
  saveUser,
  LOG_IN,
  saveUserAuth,
  CHECK_USER,
  LOG_OUT,
  SUBMIT_SIGN_UP,
  saveUserCreate,
  SUBMIT_UPDATE_PROFILE,
  saveUpdateProfile,
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
          alert('Mot de passe ou email incorrect, merci de ressaisir vos identifiants');
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
      store.dispatch(saveUserCreate(true));
      next(action);
      break;
    }
    case SUBMIT_UPDATE_PROFILE: {
      const {
        email,
        alias,
        lastname,
        firstname,
        picture,
        userArea,
        dateOfBirth,
        description,
      } = store.getState().userInfo;

      const bodyFormData = new FormData();
      bodyFormData.append('email', email);
      bodyFormData.append('nickname', alias);
      bodyFormData.append('firstname', firstname);
      bodyFormData.append('lastname', lastname);
      bodyFormData.append('area', userArea);
      bodyFormData.append('picture', picture);
      bodyFormData.append('dateOfBirth', dateOfBirth);
      bodyFormData.append('description', description);
      bodyFormData.append('password', '');
      
      const currentUserId = localStorage.getItem('currentUserId');
      const authenticationToken = localStorage.getItem('Token');
      axios.post(`https://orando.me/o/api/users/${currentUserId}`,
        bodyFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${authenticationToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert('vos modifications ont bien été prises en compte');
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
                store.dispatch(saveUpdateProfile(false));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((errors) => {
          console.log('error: ', errors);
        });
      next(action);
      break;
    }
    case SUBMIT_SIGN_UP: {
      const {
        email,
        alias,
        password,
        lastname,
        firstname,
        picture,
        userArea,
      } = store.getState().userInfo;
      console.log('que devient la photo', picture);
      const bodyFormData = new FormData();
      bodyFormData.append('email', email);
      bodyFormData.append('nickname', alias);
      bodyFormData.append('firstname', firstname);
      bodyFormData.append('lastname', lastname);
      bodyFormData.append('password', password);
      bodyFormData.append('area', userArea);
      bodyFormData.append('picture', picture);

      axios.post('https://orando.me/o/api/register',
        bodyFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          console.log('reponse après création', response.status);
          if (response.status === 201) {
            store.dispatch(saveUserCreate(true));
          }
        })
        .catch((errors) => {
          console.log('error: ', errors);
        });
    }
    default:
      next(action);
  }
};
export default usersMiddleware;
