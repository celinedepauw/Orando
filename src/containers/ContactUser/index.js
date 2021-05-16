import { connect } from 'react-redux';

import ContactUser from 'src/components/ContactUser';

import { updateContactField, contactUser } from 'src/actions/contact';

// === mapStateToProps
const mapStateToProps = (state) => ({
  messageUser: state.contactInfo.messageUser,
  isSent: state.contactInfo.isSent,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateContactField: (identifier, newValue) => {
    const action = updateContactField(identifier, newValue);
    dispatch(action);
  },
  handleContactUser: () => {
    const action = contactUser();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ContactUser);
