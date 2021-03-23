import { FETCH_WALKS } from 'src/actions/walks';

const walksMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS:
      console.log('il faut récupérer les randonnées');
      next(action);
      break;
    default:
      next(action);
  }
};
export default walksMiddleware;
