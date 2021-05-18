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

import {
  SAVE_TAGS,
} from 'src/actions/tags';

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
  walkTagsToUpdate: [],
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TAGS:
      return {
        ...state,
        walkTagsToUpdate: action.tags.map((tag) => ({
          id: tag.id,
          name: tag.name,
          color: tag.color,
          checked: false,
        })),
      };

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
    case WALK_TO_EDIT: {
      const actualTags = action.walk.tags.map((tag) => tag.id);

      const tagsToUpdate = state.walkTagsToUpdate.map((tag) => ({
        ...tag,
        checked: actualTags.find((actualtag) => actualtag == tag.id ) !== undefined,
      }));

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
        walkTagsToUpdate: tagsToUpdate,
      };
    }

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
      };

    case UPDATE_TAGS: {
      const theTags = [...state.walkTags, action.value];
      const tagsToUpdate = state.walkTagsToUpdate.map((actualTag) => ({
        ...actualTag,
        checked: actualTag.id == action.value ? action.tagChecked : actualTag.checked,
      }));

      return {
        ...state,
        walkTags: theTags,
        walkTagsToUpdate: tagsToUpdate,
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
