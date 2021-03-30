import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
  const { isLogged, type} = props;
  if (type === 'private' && !isLogged) return <Redirect to="/" />;
  return <Route {...props} />;
};

const mapStateToProps = ({ isLogged }) => ({
  isLogged,
});

export default connect(mapStateToProps)(AuthRoute);
