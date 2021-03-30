<<<<<<< HEAD
import { SAVE_WALKS, SAVE_DELETE_WALK } from 'src/actions/walks';
=======
import { SAVE_WALKS } from 'src/actions/walks';
>>>>>>> delete an organized walk ok but need a refresh to not see it anymore

const initialState = {
  walks: [],
  loading: true,
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loading: false,
      };
<<<<<<< HEAD
    case SAVE_DELETE_WALK:
      return {
        ...state,
        walkId: action.walkId,
      };
=======
>>>>>>> delete an organized walk ok but need a refresh to not see it anymore
    default:
      return state;
  }
}

export default walkReducer;
