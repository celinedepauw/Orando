import { connect } from 'react-redux';

import Home2 from 'src/components/Home2';

// === mapStateToProps
// if we need to read informations in the state
const mapStateToProps = (state) => ({
  // prop's name to fill : element to get in the state
  areas: state.areasList.areas,
  isLogged: state.userInfo.isLogged,
});

// === mapDispatchToProps
// if we need to dispatch actions to the store (update the state)
const mapDispatchToProps = (dispatch) => ({
  // prop's name to fill : function wich dispatches the action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home2);
