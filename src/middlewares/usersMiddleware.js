import axios from 'axios';

const usersMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    default:
      next(action);
  }
};
export default usersMiddleware;
