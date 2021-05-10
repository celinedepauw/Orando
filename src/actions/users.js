// === action types
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_AUTHENTICATION_FIELD = 'UPDATE_AUTHENTICATION_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_AUTH = 'SAVE_USER_AUTH';
export const CHECK_USER = 'CHECK_USER';
export const UPDATE_SIGN_UP = 'UPDATE_SIGN_UP';
export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const SAVE_USER_CREATE = 'SAVE_USER_CREATE';
export const SUBMIT_UPDATE_PROFILE = 'SUBMIT_UPDATE_PROFILE';

// === action creators
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user: user,
});

export const saveUserAuth = (isLogged) => ({
  type: SAVE_USER_AUTH,
  isLogged,
});

export const updateAuthenticationField = (identifier, newValue) => ({
  type: UPDATE_AUTHENTICATION_FIELD,
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

export const checkUser = () => ({
  type: CHECK_USER,
});

// action creator used to sign up form
export const updateSignUp = (identifier, newValue) => ({
  type: UPDATE_SIGN_UP,
  identifier: identifier,
  value: newValue,
});

export const updateAvatar = (file) => ({
  type: UPDATE_AVATAR,
  file: file,
});

export const submitSignUp = (
  email,
  alias,
  password,
  lastname,
  firstname,
  picture,
  userArea,
) => ({
  type: SUBMIT_SIGN_UP,
  email: email,
  alias: alias,
  password: password,
  lastname: lastname,
  firstname: firstname,
  picture: picture,
  userArea: userArea,
});

export const saveUserCreate = (isSuccess) => ({
  type: SAVE_USER_CREATE,
  isSuccess,
});

export const submitUpdateProfile = (
  email,
  alias,
  password,
  lastname,
  firstname,
  picture,
  userArea,
  dateOfBirth,
  description,
) => ({
  type: SUBMIT_UPDATE_PROFILE,
  email: email,
  alias: alias,
  password: password,
  lastname: lastname,
  firstname: firstname,
  picture: picture,
  userArea: userArea,
  dateOfBirth: dateOfBirth,
  description: description,
})
