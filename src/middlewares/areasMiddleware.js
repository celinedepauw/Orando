import axios from 'axios';
import { FETCH_AREAS, saveAreas } from 'src/actions/areas';
import { FETCH_TAGS, saveTags } from 'src/actions/tags';

const areasMiddleware = (store) => (next) => (action) => {
  // console.log('we get an action in areaMiddleware: ', action);
  switch (action.type) {
    case FETCH_AREAS:
      // console.log('we need to get the areas');
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
      // console.log('we need to get the tags');
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
