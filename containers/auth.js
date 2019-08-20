import Container from "unstated";
class Auth extends Container {
  state = {
    isAuthenticated: false,
    user: null
  };
  async setAuthentication(authenticationStatus, user = null) {
    await this.setState({
      isAuthenticated: authenticationStatus,
      user: user
    });
  }
}
