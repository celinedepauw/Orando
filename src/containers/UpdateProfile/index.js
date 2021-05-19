import { connect } from 'react-redux';
import { updateAvatar, updateSignUp, submitUpdateProfile } from 'src/actions/users';

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
  dateOfBirth: state.userInfo.dateOfBirth,
  areas: state.areasList.areas,
  userArea: state.userInfo.userArea,
  lastname: state.userInfo.lastname,
  firstname: state.userInfo.firstname,
  email: state.userInfo.email,
  description: state.userInfo.description,
  
});

// === mapDispatchToProps
// if we need to update the state dispatching actions to the store
const mapDispatchToProps = (dispatch) => ({
  updateAvatar: (file) => {
    const action = updateAvatar(file);
    dispatch(action);
  },
  updateSignUp: (identifier, newValue) => {
    const action = updateSignUp(identifier, newValue);
    dispatch(action);
  },
  submitUpdateProfile: () => {
    dispatch(submitUpdateProfile());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
