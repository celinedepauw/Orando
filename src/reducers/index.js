import { combineReducers } from 'redux';

// on importe tous les reducers
import walkReducer from './walkReducer';
import userReducer from './userReducer';
import areaReducer from './areaReducer';
import tagReducer from './tagReducer';
import contactReducer from './contactReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour

const rootReducer = combineReducers({
  walksList: walkReducer,
  userInfo: userReducer,
  areasList: areaReducer,
  tagsList: tagReducer,
  contactInfo: contactReducer,
});

export default rootReducer;
