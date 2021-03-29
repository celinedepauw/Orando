// === action types
export const FETCH_AREAS = 'FETCH_AREAS';
export const SAVE_AREAS = 'SAVE_AREAS';

// === action creators
export const fetchAreas = () => ({
  type: FETCH_AREAS,
});

export const saveAreas = (areas) => ({
  type: SAVE_AREAS,
  areas: areas,
});
