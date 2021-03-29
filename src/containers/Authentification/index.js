import { connect } from 'react-redux';

// on importe le composant de présentation
import Authentification from 'src/components/Authentification';

import { updateAuthentificationField, logIn } from 'src/actions/users';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.userInfo.email,
  password: state.userInfo.password,
  isLogged: state.userInfo.isLogged,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateAuthentificationField: (identifier, newValue) => {
    // console.log(`changeField: identifier=${identifier}, newValue=${newValue}`);
    const action = updateAuthentificationField(identifier, newValue);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    console.log('it time to disconnect');
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Authentification);
