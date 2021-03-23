import { SAVE_WALKS } from 'src/actions/walks';

const initialState = {
  walks: [],
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
      };
    default:
      return state;
  }
}

export default walkReducer;
