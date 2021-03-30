import { connect } from 'react-redux';
import { logOut } from 'src/actions/users';

import MobileNav from 'src/components/MobileNav';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
