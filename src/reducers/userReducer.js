import { SAVE_USER, UPDATE_AUTHENTIFICATION_FIELD } from 'src/actions/users';

const initialState = {
  user: {},
  loading: true,
  email: '',
  password: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case UPDATE_AUTHENTIFICATION_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
}

export default userReducer;
