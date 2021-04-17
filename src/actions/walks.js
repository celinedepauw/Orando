// === action types
export const FETCH_WALKS = 'FETCH_WALKS';
export const SAVE_WALKS = 'SAVE_WALKS';
export const DELETE_WALK = 'DELETE_WALK';
export const PARTIPATE_WALK = 'PARTIPATE_WALK';
export const CANCEL_PARTICIPATE = 'CANCEL_PARTICIPATE';
export const CREATE_WALK = 'CREATE_WALK';

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

export const createWalk = (
  walkTitle,
  walkAreaId,
  walkTags,
  walkStartingPoint,
  walkEndPoint,
  walkDate,
  walkDuration,
  walkDescription,
  walkDistance,
  walkDifficulty,
  walkElevation,
) => ({
  type: CREATE_WALK,
  walk: {
    walkTitle: walkTitle,
    walkAreaId: walkAreaId,
    walkTags: walkTags,
    walkStartingPoint: walkStartingPoint,
    walkEndPoint: walkEndPoint,
    walkDate: walkDate,
    walkDuration: walkDuration,
    walkDescription: walkDescription,
    walkDistance: walkDistance,
    walkDifficulty: walkDifficulty,
    walkElevation: walkElevation,
  },
});

export const cancelParticipate = (walkId) => ({
  type: CANCEL_PARTICIPATE,
  walkId: walkId,
});
