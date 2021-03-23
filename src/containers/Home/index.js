import { connect } from 'react-redux';

import Home from 'src/components/Home';

// === mapStateToProps
// if we need to read informations in the state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  walks: state.walks,
});

// === mapDispatchToProps
// if we need to update the state dispatching actions to the store
const mapDispatchToProps = (dispatch) => ({
  // prop name: function that dispatch the action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
