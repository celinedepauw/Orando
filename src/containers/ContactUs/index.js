import { connect } from 'react-redux';

// on importe le composant de présentation
import ContactUs from 'src/components/ContactUs';

import { updateContactField, contactWebsite } from 'src/actions/contact';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  subject: state.contactInfo.subject,
  email: state.contactInfo.email,
  message: state.contactInfo.message,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
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
