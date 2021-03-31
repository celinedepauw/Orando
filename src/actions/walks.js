// === action types
export const FETCH_WALKS = 'FETCH_WALKS';
export const SAVE_WALKS = 'SAVE_WALKS';
export const DELETE_WALK = 'DELETE_WALK';
export const DELETE_WALK_SUCCESS = 'DELETE_WALK_SUCCESS';

// === action creators
export const fetchWalks = () => ({
  type: FETCH_WALKS,
});

export const saveWalks = (walks) => ({
  type: SAVE_WALKS,
  walks: walks,
});

export const deleteWalk = (walkId) => ({
  type: DELETE_WALK,
  walkId,
});

export const deleteWalkSuccess = (walkId, walks) => ({
  type: DELETE_WALK_SUCCESS,
  walks: walks.splice(walkId, 1),
});
