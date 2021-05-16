import {
  UPDATE_CONTACT_FIELD,
  CONTACT_WEBSITE,
  SAVE_MESSAGE_SENT,
  CONTACT,
} from '../actions/contact';

const initialState = {
  subject: '',
  email: '',
  message: '',
  messageUser: '',
  creatorId: '',
  isSent: false,
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONTACT_FIELD:
      if (action.identifier === 'subject') {
        return {
          ...state,
          subject: action.value,
        };
      }
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      if (action.identifier === 'message') {
        return {
          ...state,
          message: action.value,
        };
      }
      return {
        ...state,
        messageUser: action.value,
      };
    case CONTACT_WEBSITE:
      return {
        ...state,
        subject: '',
        email: '',
        message: '',
        isSent: true,
      };
    case SAVE_MESSAGE_SENT:
      return {
        ...state,
        isSent: false,
      };
    case CONTACT:
      return {
        ...state,
        creatorId: action.creatorId,
      };
    default:
      return state;
  }
}
export default contactReducer;
