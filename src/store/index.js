import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import walksMiddleware from 'src/middlewares/walksMiddleware';

import walkReducer from 'src/reducers/walkReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    walksMiddleware,
  ),
);
const store = createStore(
  // reducer
  walkReducer,
  // enhancer
  enhancers,
);

export default store;
