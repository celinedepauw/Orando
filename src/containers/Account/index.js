import { connect } from 'react-redux';
import { logOut } from 'src/actions/users';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
