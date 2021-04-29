import { connect } from 'react-redux';


import UpdateProfile from 'src/components/UpdateProfile';

// === mapStateToProps
// if we need to read informations in the state
const mapStateToProps = (state) => ({
  // name of the prop to fill: we have to get in the state
  // userInfo is the name of the drawer which contains the userReducer
  user: state.userInfo.user,
  loadingUser: state.userInfo.loadingUser,
  alias: state.userInfo.alias,
  picture: state.userInfo.picture,
});

// === mapDispatchToProps
// if we need to update the state dispatching actions to the store
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
