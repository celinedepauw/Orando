import { SAVE_AREAS } from 'src/actions/areas';

const initialState = {
  areas: [],
  loading: true,
};

function areaReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AREAS:
      return {
        ...state,
        areas: action.areas,
        loading: false,
      };
    default:
      return state;
  }
}

export default areaReducer;
