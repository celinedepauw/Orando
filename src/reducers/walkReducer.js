import {
  SAVE_WALKS,
  UPDATE_CREATE_WALK_FIELD,
  UPDATE_CREATE_WALK_SELECT,
  UPDATE_WALK_FIELD,
  UPDATE_WALK_SELECT,
  SAVE_CREATED_WALK,
} from 'src/actions/walks';

const initialState = {
  walks: [],
  loadingWalk: true,
  walkId: '',
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
  isCreated: false,
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loadingWalk: false,
      };
    case SAVE_CREATED_WALK:
      return {
        ...state,
        isCreated: true,
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
      if (action.identifier === 'walkDuration') {
        return {
          ...state,
          walkDuration: action.value,
        };
      }
      if (action.identifier === 'walkTags') {
        const selectedTags = [...state.walkTags, action.value];
        return {
          ...state,
          walkTags: selectedTags,
        };
      }
      return {
        ...state,
      };
    case UPDATE_WALK_FIELD:
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
    case UPDATE_WALK_SELECT:
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
      if (action.identifier === 'walkDuration') {
        return {
          ...state,
          walkDuration: action.value,
        };
      }
      if (action.identifier === 'walkTags') {
        const selectedTags = [...state.walkTags, action.value];
        return {
          ...state,
          walkTags: selectedTags,
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
