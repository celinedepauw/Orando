import { SAVE_WALKS, SAVE_DELETE_WALK } from 'src/actions/walks';

const initialState = {
  walks: [],
  loading: true,
  walkId: null,
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loading: false,
      };
    case SAVE_DELETE_WALK:
      return {
        ...state,
        walkId: action.walkId,
      };
    default:
      return state;
  }
}

export default walkReducer;
