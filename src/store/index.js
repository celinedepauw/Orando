import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import walksMiddleware from 'src/middlewares/walksMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';
import areasMiddleware from 'src/middlewares/areasMiddleware';

import reducers from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    areasMiddleware,
    walksMiddleware,
    usersMiddleware,
  ),
);
const store = createStore(
  // reducer
  reducers,
  // enhancer
  enhancers,
);

export default store;
