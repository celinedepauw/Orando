// === action types
export const UPDATE_CONTACT_FIELD = 'UPDATE_CONTACT_FIELD';
export const CONTACT_WEBSITE = 'CONTACT_WEBSITE';
export const CONTACT_USER = 'CONTACT_USER';
export const SAVE_MESSAGE_SENT = 'SAVE_MESSAGE_SENT';

// === action creators
export const updateContactField = (identifier, newValue) => ({
  type: UPDATE_CONTACT_FIELD,
  identifier: identifier,
  value: newValue,
});

export const contactWebsite = (
  subject,
  email,
  message,
) => ({
  type: CONTACT_WEBSITE,
  subject,
  email,
  message,
});

export const contactUser = (
  message,
) => ({
  type: CONTACT_USER,
  message,
});

export const saveMessageSent = (isSent) => ({
  type: SAVE_MESSAGE_SENT,
  isSent,
});
