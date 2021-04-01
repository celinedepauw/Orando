// === action types
export const FETCH_WALKS = 'FETCH_WALKS';
export const SAVE_WALKS = 'SAVE_WALKS';
export const DELETE_WALK = 'DELETE_WALK';
export const PARTIPATE_WALK = 'PARTIPATE_WALK';

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
  walkId: walkId,
});

export const participateWalk = (walkId) => ({
  type: PARTIPATE_WALK,
  walkId: walkId,
});
