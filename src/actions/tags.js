// === action types
export const FETCH_TAGS = 'FETCH_TAGS';
export const SAVE_TAGS = 'SAVE_TAGS';

// === action creators
export const fetchTags = () => ({
  type: FETCH_TAGS,
});

export const saveTags = (tags) => ({
  type: SAVE_TAGS,
  tags: tags,
});
