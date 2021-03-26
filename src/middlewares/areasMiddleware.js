import axios from 'axios';
import { FETCH_AREAS, saveAreas } from 'src/actions/areas';

const areasMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans areaMiddleware: ', action);
  switch (action.type) {
    case FETCH_AREAS:
      console.log('il faut récupérer les régions');
      axios.get('http://orando.me/back/api/areas')
      .then((response) => {
           console.log(response.data);
          store.dispatch(saveAreas(response.data));
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
export default areasMiddleware;
