import axios from 'axios';
import {
  FETCH_WALKS,
  DELETE_WALK,
  saveWalks,
  deleteWalkSuccess,
} from 'src/actions/walks';

const walksMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS:
      // console.log('il faut récupérer les randonnées');
      axios.get('http://orando.me/back/api/walks')
      .then((response) => {
          // console.log(response.data);
          store.dispatch(saveWalks(response.data));
        })
      .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    case DELETE_WALK: {
      // console.log('il faut effacer une randonnée');
      axios.delete(`http://orando.me/back/api/walks/${action.walkId}`)
        .then((response) => {
          console.log(response);
          // const { walks } = store.getState().walksList;
          // console.log(walks);
          // const { walkId } = store.getState().walksList;
          // console.log(walkId);
          // store.dispatch(deleteWalkSuccess(walkId, walks));
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
