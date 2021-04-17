import { SAVE_WALKS } from 'src/actions/walks';

const initialState = {
  walks: [],
  loadingWalk: true,
  walk: {
    walkTitle: '',
    walkAreaId: null,
    walkTags: [],
    walkStartingPoint: '',
    walkEndPoint: '',
    walkDate: '',
    walkDuration: null,
    walkDescription: '',
    walkDistance: null,
    walkDifficulty: '',
    walkElevation: null,
  },
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WALKS:
      return {
        ...state,
        walks: action.walks,
        loadingWalk: false,
      };
    default:
      return state;
  }
}

export default walkReducer;
