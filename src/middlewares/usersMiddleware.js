import axios from 'axios';
import { FETCH_USER, saveUser } from 'src/actions/users';

const usersMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans usersMiddleware: ', action);
  switch (action.type) {
    case FETCH_USER:
      // console.log('il faut récupérer les randonnées');
      axios.get('http://orando.me/back/api/users/3')
      .then((response) => {
          // console.log(response.data);
          store.dispatch(saveUser(response.data));
        })
      .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default usersMiddleware;
