import { connect } from 'react-redux';
import { logOut } from 'src/actions/users';

import NavTop from 'src/components/Header/NavTop';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
