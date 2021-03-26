// === action types
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_AUTHENTIFICATION_FIELD = 'UPDATE_AUTHENTIFICATION_FIELD';

// === action creators
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user: user,
});

export const updateAuthentificationField = (identifier, newValue) => ({
  type: UPDATE_AUTHENTIFICATION_FIELD,
  identifier: identifier,
  value: newValue,
});
