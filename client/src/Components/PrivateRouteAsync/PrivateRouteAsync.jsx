import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import checkToken from "../../toolCommands/user/checkToken";
import store from "store";
class PrivateRouteAsync extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    const authenticationResult = await this.props.checkAuthentication();
    console.log("AR:::", authenticationResult);
    if (authenticationResult === true) {
      this.setState({
        loading: false,
        isAuthenticated: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.props.authenticated ? (
            <Component {...rest} {...props} />
          ) : this.state.loading ? (
            <div>LOADING</div>
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: this.props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRouteAsync;
