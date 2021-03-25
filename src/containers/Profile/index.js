import { connect } from 'react-redux';


import Profile from 'src/components/Profile';

// === mapStateToProps
// if we need to read informations in the state
const mapStateToProps = (state) => ({
  // name of the prop to fill: we have to get in the state
  // userInfo is the name of the drawer which contains the userReducer
  user: state.userInfo.user,
});

// === mapDispatchToProps
// if we need to update the state dispatching actions to the store
const mapDispatchToProps = (dispatch) => ({
  // prop name: function that dispatch the action
  // test to remove if not works
 
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
