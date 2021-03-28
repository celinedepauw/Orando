import { connect } from 'react-redux';

import MobileNav from 'src/components/MobileNav';

const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
