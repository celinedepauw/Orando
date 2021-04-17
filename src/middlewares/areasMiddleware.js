import axios from 'axios';
import { FETCH_AREAS, saveAreas } from 'src/actions/areas';
import { FETCH_TAGS, saveTags } from 'src/actions/tags';

const areasMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans areaMiddleware: ', action);
  switch (action.type) {
    case FETCH_AREAS:
      // console.log('il faut récupérer les régions');
      axios.get('https://orando.me/o/api/areas/')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveAreas(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    case FETCH_TAGS:
      // console.log('il faut récupérer les tags');
      axios.get('https://orando.me/o/api/tags/')
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveTags(response.data));
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
