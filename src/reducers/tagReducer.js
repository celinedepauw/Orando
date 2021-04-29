import { SAVE_TAGS } from 'src/actions/tags';

const initialState = {
  tags: [],
  loadingTags: true,
};

function tagReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TAGS:
      return {
        ...state,
        tags: action.tags,
        loadingTags: false,
      };
    default:
      return state;
  }
}

export default tagReducer;
