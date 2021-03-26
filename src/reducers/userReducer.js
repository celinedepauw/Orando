import { SAVE_USER } from 'src/actions/users';

const initialState = {
  user: {},
  loading: true,
  email: 'yaya',
  password: 'yeye',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    default:
      return state;
  }
}

export default userReducer;
