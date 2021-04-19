import { SAVE_WALKS, UPDATE_CREATE_WALK_FIELD } from 'src/actions/walks';

const initialState = {
  walks: [],
  loadingWalk: true,
  walkTitle: '',
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
      return {
        ...state,
        walkTitle: action.value,
      };

    default:
      return state;
  }
}

export default walkReducer;
