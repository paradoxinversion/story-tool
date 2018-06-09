import React, { Component } from "react";
import axiosInstance from "../../../axiosInstance";
import { withRouter } from "react-router-dom";
import store from "store";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: null
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
    const result = await axiosInstance.post(
      "/auth/log-in",
      {
        username: this.state.name,
        password: this.state.password
      },
      {
        validateStatus: function(status) {
          return (status >= 200 && status < 300) || status === 401;
        }
      }
    );
    console.log(result);
    if (result.status === 200) {
      this.props.setAuthentication(true, result.data.user);
      store.set("token", { token: result.data.token });
      this.props.history.push("/tool/dashboard");
    } else {
      this.setState({
        error: {
          message: "Invalid username or password"
        }
      });
    }
  }
  render() {
    return (
      <div className="container">
        <form className="vertical-form panel panel-centered">
          <p className="vertical-form__title">Log In</p>
          <label className="vertical-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="vertical-form__input"
            name="name"
            type="text"
            id="username"
            autoComplete="username"
            required={true}
            minLength="4"
            maxLength="12"
            onChange={this.handleInputChange}
          />
          <label className="vertical-form__label" htmlFor="password">
            Password
          </label>
          <input
            className="vertical-form__input"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            required={true}
            minLength="4"
            maxLength="12"
            onChange={this.handleInputChange}
          />
          {this.state.error !== null ? <p>{this.state.error.message}</p> : null}
          <button className="button" type="submit" onClick={this.handleLogIn}>
            {" "}
            Log In{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LogIn);
