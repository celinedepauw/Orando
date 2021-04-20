import { SAVE_WALKS, UPDATE_CREATE_WALK_FIELD, UPDATE_CREATE_WALK_SELECT } from 'src/actions/walks';

const initialState = {
  walks: [],
  loadingWalk: true,
  walkTitle: '',
  walkAreaId: '',
  walkTags: [],
  walkStartingPoint: '',
  walkEndPoint: '',
  walkDate: '',
  walkDuration: '',
  walkDistance: '',
  walkDifficulty: '',
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
    case UPDATE_CREATE_WALK_SELECT:
      if (action.identifier === 'walkAreaId') {
        return {
          ...state,
          walkAreaId: action.value,
        };
      }
      if (action.identifier === 'walkDifficulty') {
        return {
          ...state,
          walkDifficulty: action.value,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default walkReducer;
