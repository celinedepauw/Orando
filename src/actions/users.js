// === action types
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_AUTHENTIFICATION_FIELD = 'UPDATE_AUTHENTIFICATION_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_LOG = 'SAVE_USER_LOG';


// === action creators
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user: user,
});

// it's the right thing to do? 
// can i create 2 actions creators with the same type
export const saveUserLog = (isLogged, token) => ({
  type: SAVE_USER_LOG,
  isLogged,
  token,
});

export const updateAuthentificationField = (identifier, newValue) => ({
  type: UPDATE_AUTHENTIFICATION_FIELD,
  identifier: identifier,
  value: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});
