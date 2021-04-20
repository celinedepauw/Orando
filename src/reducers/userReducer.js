import { SAVE_USER, UPDATE_AUTHENTICATION_FIELD, SAVE_USER_AUTH, UPDATE_SIGN_UP } from 'src/actions/users';

const initialState = {
  user: {},
  loadingUser: true,
  email: '',
  password: '',
  alias: '',
  lastname: '',
  firstname: '',
  picture: '',
  userArea: '',
  // indicate if the user is authenticated
  isLogged: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user,
        loadingUser: false,
      };
    case UPDATE_AUTHENTICATION_FIELD:
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
        isLogged: action.isLogged,
        // we clear out the field
        email: '',
        password: '',
      };
    case UPDATE_SIGN_UP:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      if (action.identifier === 'alias') {
        return {
          ...state,
          alias: action.value,
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }
      if (action.identifier === 'lastname') {
        return {
          ...state,
          lastname: action.value,
        };
      }
      if (action.identifier === 'firstname') {
        return {
          ...state,
          firstname: action.value,
        };
      }
      if (action.identifier === 'picture') {
        return {
          ...state,
          picture: action.value,
        };
      }

      return {
        ...state,
        userArea: action.value,
      };

    default:
      return state;
  }
}

export default userReducer;
