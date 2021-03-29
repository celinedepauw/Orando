import { SAVE_USER, UPDATE_AUTHENTIFICATION_FIELD, SAVE_USER_AUTH, LOG_OUT } from 'src/actions/users';

const initialState = {
  user: {},
  loading: true,
  email: '',
  password: '',
  // indicate if the user is authenticated
  isLogged: false,
  // our token, we have to stock in localstorage
  token: null,
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
    case SAVE_USER_AUTH:
      return {
        ...state,
        // why isLogged: action.isLogged doesn't work
        isLogged: true,
        token: action.token,
        // we clear out the field
        email: '',
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
      };
    default:
      return state;
  }
}

export default userReducer;
