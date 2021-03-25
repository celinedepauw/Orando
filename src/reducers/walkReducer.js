import { SAVE_WALKS } from 'src/actions/walks';

const initialState = {
  walks: [],
  // indique si on est en cours de chargement des recettes
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
    default:
      return state;
  }
}

export default walkReducer;
