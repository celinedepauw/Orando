import { connect } from 'react-redux';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
  user: state.userInfo.user,
  loadingUser: state.userInfo.loadingUser,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
