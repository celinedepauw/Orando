import axios from 'axios';
import {
  FETCH_WALKS,
  DELETE_WALK,
  saveWalks,
  PARTIPATE_WALK,
} from 'src/actions/walks';
import { saveUserAuth, saveUser } from 'src/actions/users';

const walksMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS: {
      // console.log('il faut récupérer les randonnées');
      const authenticationToken = localStorage.getItem('Token');
      axios.get('https://orando.me/o/api/walks', { headers: { Authorization: `Bearer ${authenticationToken}` } })
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
      // console.log('il faut effacer une randonnée');
      const authenticationToken = localStorage.getItem('Token');
      axios.delete(`https://orando.me/o/api/walks/${action.walkId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
        .then((response) => {
          // const walkId = response.data.id;
          // console.log(response);
          // const walks2 = store.getState().walksList.walks;
          // console.log(typeof walks2);
          // console.log('tableau des randos', walks2);
          if (response.status === 200) {
            alert('Votre randonnée a bien été supprimée !');
            const currentUserId = localStorage.getItem('currentUserId');
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case PARTIPATE_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      console.log(action.walkId);
      axios.post('https://orando.me/o/api/participant', {
        user: currentUserId,
        walk: action.walkId,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          if (response.status === 201) {
            alert(response.data.message);
          }
          console.log('hello', response);
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
export default walksMiddleware;
