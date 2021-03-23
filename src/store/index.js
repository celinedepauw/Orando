import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import walkReducer from 'src/reducers/walkReducer';

const store = createStore(
  // reducer
  walkReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
