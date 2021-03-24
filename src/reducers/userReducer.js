import { SAVE_USER } from 'src/actions/users';

const initialState = {
  user: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default userReducer;
