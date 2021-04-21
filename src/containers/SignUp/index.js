import { connect } from 'react-redux';
import { updateSignUp, updateAvatar, submitSignUp } from 'src/actions/users';

import SignUp from 'src/components/SignUp';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.userInfo.isLogged,
  email: state.userInfo.email,
  password: state.userInfo.password,
  alias: state.userInfo.alias,
  lastname: state.userInfo.lastname,
  firstname: state.userInfo.firstname,
  picture: state.userInfo.picture,
  areas: state.areasList.areas,
  areaId: state.userInfo.areaId,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateSignUp: (identifier, newValue) => {
    const action = updateSignUp(identifier, newValue);
    dispatch(action);
  },
  handleSignUp: () => {
    dispatch(submitSignUp());
  },
  updateAvatar: (file) => {
    const action = updateAvatar(file);
    dispatch(action);
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
