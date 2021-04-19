import { SAVE_WALKS, UPDATE_CREATE_WALK_FIELD } from 'src/actions/walks';

const initialState = {
  walks: [],
  loadingWalk: true,
  walkTitle: '',
  walkStartingPoint: '',
  walkEndPoint: '',
  walkDate: '',
  walkDuration: '',
  walkDistance: '',
  walkElevation: '',
  walkNumberPeople: '',
  walkDescription: '',
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loadingWalk: false,
      };
    case UPDATE_CREATE_WALK_FIELD:
      if (action.identifier === 'walkTitle') {
        return {
          ...state,
          walkTitle: action.value,
        };
      }
      if (action.identifier === 'walkStartingPoint') {
        return {
          ...state,
          walkStartingPoint: action.value,
        };
      }
      if (action.identifier === 'walkEndPoint') {
        return {
          ...state,
          walkEndPoint: action.value,
        };
      }
      if (action.identifier === 'walkDate') {
        return {
          ...state,
          walkDate: action.value,
        };
      }
      if (action.identifier === 'walkDuration') {
        return {
          ...state,
          walkDuration: action.value,
        };
      }
      if (action.identifier === 'walkDistance') {
        return {
          ...state,
          walkDistance: action.value,
        };
      }
      if (action.identifier === 'walkElevation') {
        return {
          ...state,
          walkElevation: action.value,
        };
      }
      if (action.identifier === 'walkNumberPeople') {
        return {
          ...state,
          walkNumberPeople: action.value,
        };
      }
      return {
        ...state,
        walkDescription: action.value,
      };
    default:
      return state;
  }
}

export default walkReducer;
