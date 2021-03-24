// === action types
export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';

// === action creators
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users: users,
});
