import { UPDATE_CONTACT_FIELD, CONTACT_WEBSITE } from '../actions/contact';

const initialState = {
  subject: '',
  email: '',
  message: '',
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
      return {
        ...state,
        message: action.value,
      };
    case CONTACT_WEBSITE:
      return {
        ...state,
        subject: '',
        email: '',
        message: '',
      };
    default:
      return state;
  }
}
export default contactReducer;
