import { connect } from 'react-redux';
import { updateAvatar, updateSignUp } from 'src/actions/users';

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
  userBirthDay: state.userInfo.userBirthDay,
  userBirthMonth: state.userInfo.userBirthMonth,
  userBirthYear: state.userInfo.userBirthYear,
  areas: state.areasList.areas,
  userArea: state.userInfo.userArea,
  lastname: state.userInfo.lastname,
  firstname: state.userInfo.firstname,
  email: state.userInfo.email,
  
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
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
