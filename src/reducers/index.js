import { combineReducers } from 'redux';

// on importe tous les reducers
import walkReducer from './walkReducer';
import userReducer from './userReducer';
import areaReducer from './areaReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  // nom du tiroir : reducer qui gère cette partie du state
  walksList: walkReducer,
  userInfo: userReducer,
  areasList: areaReducer,
});

export default rootReducer;
