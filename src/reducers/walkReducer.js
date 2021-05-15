import {
  SAVE_WALKS,
  UPDATE_CREATE_WALK_FIELD,
  UPDATE_CREATE_WALK_SELECT,
  UPDATE_WALK_FIELD,
  UPDATE_WALK_SELECT,
  UPDATE_TAGS,
  SAVE_CREATED_WALK,
  CREATE_WALK,
  EDIT_WALK,
  WALK_TO_EDIT,
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
    case EDIT_WALK:
      return {
        ...state,
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
      };
    case WALK_TO_EDIT:
      return {
        ...state,
        walkId: action.walk.id,
        walkTitle: action.walk.title,
        walkAreaId: action.walk.area.id,
        walkTags: action.walk.tags,
        walkStartingPoint: action.walk.startingPoint,
        walkEndPoint: action.walk.endPoint,
        walkDate: action.walk.date,
        walkDuration: action.walk.duration,
        walkDistance: action.walk.kilometre,
        walkDifficulty: action.walk.difficulty,
        walkElevation: action.walk.elevation,
        walkNumberPeople: action.walk.maxNbPersons,
        walkDescription: action.walk.description,
      };
    case CREATE_WALK:
      return {
        ...state,
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
        isCreated: true,
      };
    case UPDATE_TAGS: {
      const theTags = [...state.walkTags, action.value];
      return {
        ...state,
        walkTags: theTags,
      };
    }
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loadingWalk: false,
      };
    case SAVE_CREATED_WALK:
      return {
        ...state,
        isCreated: false,
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
