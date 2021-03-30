import { connect } from 'react-redux';

import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
