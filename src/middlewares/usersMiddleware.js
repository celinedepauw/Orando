import axios from 'axios';
import { FETCH_USER, saveUser, LOG_IN, saveUserLog } from 'src/actions/users';


const usersMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans usersMiddleware: ', action);
  switch (action.type) {
    case FETCH_USER:
      // console.log('il faut récupérer les randonnées');
      axios.get('http://orando.me/back/api/users/2')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    case LOG_IN: {
      console.log('toto');
      const { email, password } = store.getState().userInfo;
      axios.post('http://orando.me/back/api/login_check', {
        username: email,
        password: password,
      })
        .then((response) => {
          store.dispatch(saveUserLog(response.data.logged, response.data.token));
          console.log(response);
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
