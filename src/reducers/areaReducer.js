import { SAVE_AREAS } from 'src/actions/areas';

const initialState = {
  areas: [],
  loadingAreas: true,
};

function areaReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AREAS:
      return {
        ...state,
        areas: action.areas,
        loadingAreas: false,
      };
    default:
      return state;
  }
}

export default areaReducer;
