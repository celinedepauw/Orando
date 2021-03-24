import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import walksMiddleware from 'src/middlewares/walksMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    walksMiddleware,
    usersMiddleware,
  ),
);
const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
