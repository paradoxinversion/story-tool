import React, { Component } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/log-in",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
