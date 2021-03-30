import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router";
import Page from 'src/components/Page';



const mapStateToProps = (state) => ({
  isLogged: state.userInfo.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
