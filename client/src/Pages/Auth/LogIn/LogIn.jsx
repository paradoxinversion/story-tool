import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleLogIn(event) {
    event.preventDefault();
    const result = await axios.post("http://localhost:3001/api/auth/log-in", {
      username: this.state.name,
      password: this.state.password
    });
    console.log(result);
    if (result.status === 200) {
      console.log("Redirecting to Dashboard!");
      // <Redirect push to="/tool/dashboard" />;
      this.props.setAuthentication(true, result.data.user);
      this.props.history.push("/tool/dashboard");
    }
  }
  render() {
    return (
      <Fragment>
        <form>
          <p>Log In</p>
          <label htmlFor="username">Usernam</label>
          <input
            name="name"
            type="text"
            id="username"
            autoComplete="username"
            required={true}
            minLength="4"
            maxLength="12"
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            required={true}
            minLength="4"
            maxLength="12"
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleLogIn}>
            {" "}
            Log In{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(LogIn);