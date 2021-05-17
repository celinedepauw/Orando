import { connect } from 'react-redux';

// on importe le composant de présentation
import ContactUs from 'src/components/ContactUs';

import { updateContactField, contactWebsite } from 'src/actions/contact';

// === mapStateToProps
const mapStateToProps = (state) => ({
  subject: state.contactInfo.subject,
  email: state.contactInfo.email,
  message: state.contactInfo.message,
  isSent: state.contactInfo.isSent,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateContactField: (identifier, newValue) => {
    const action = updateContactField(identifier, newValue);
    dispatch(action);
  },
  handleContact: () => {
    const action = contactWebsite();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
