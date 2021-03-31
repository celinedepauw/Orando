// === action types
export const FETCH_WALKS = 'FETCH_WALKS';
export const SAVE_WALKS = 'SAVE_WALKS';
export const DELETE_WALK = 'DELETE_WALK';
export const SAVE_DELETE_WALK = 'SAVE_DELETE_WALK';

// === action creators
export const fetchWalks = () => ({
  type: FETCH_WALKS,
});

export const saveWalks = (walks) => ({
  type: SAVE_WALKS,
  walks: walks,
});

export const deleteWalk = () => ({
  type: DELETE_WALK,
});

export const saveDeleteWalk = (walkId) => ({
  type: SAVE_DELETE_WALK,
  walkId,
});
