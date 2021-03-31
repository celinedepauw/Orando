import axios from 'axios';
import {
  FETCH_WALKS,
  DELETE_WALK,
  saveWalks,
} from 'src/actions/walks';
import { saveUserAuth } from 'src/actions/users';

const walksMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS: {
      // console.log('il faut récupérer les randonnées');
      const authenticationToken = localStorage.getItem('Token');
      axios.get('http://orando.me/back/api/walks', { headers: { Authorization: `Bearer ${authenticationToken}` } })
      .then((response) => {
          // console.log(response.data);
          if (response.status === 401) {
            localStorage.clear();
            store.dispatch(saveUserAuth(false));
          }
          store.dispatch(saveWalks(response.data));
        })
      .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case DELETE_WALK: {
      console.log('il faut effacer une randonnée');
      const { walkId } = store.getState().walksList;
      console.log('walkid middleware', walkId);
      axios.delete(`http://orando.me/back/api/walks/${walkId}`)
        .then((response) => {
          console.log(response.data);
          // store.dispatch(saveWalks(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  
  }
};
export default walksMiddleware;
