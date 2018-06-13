"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import attemptUserSignUp from "../../../toolCommands/user/attemptUserSignUp";
import store from "store";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      error: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.signUpGuest = this.signUpGuest.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleSignUp(event) {
    event.preventDefault();
    const result = await attemptUserSignUp(
      this.state.name,
      this.state.password,
      false
    );
    console.log(result);
    if (result.status === 200) {
      this.props.history.push("/auth/login");
    } else {
      console.log("error...", result);
      this.setState({
        error: {
          message: result.data.message
        }
      });
    }
  }

  async signUpGuest() {
    const result = await attemptUserSignUp(
      this.state.name,
      this.state.password,
      true
    );
    if (result.status === 200) {
      this.props.setAuthentication(true, result.data.user);
      store.set("storytool", { token: result.data.token });
      this.props.history.push("/tool/dashboard");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-centered">
          <section className="panel">
            <form className="vertical-form ">
              <p className="vertical-form__title"> Sign Up</p>
              <label className="form__label" htmlFor="username">
                Username
              </label>
              <input
                className="vertical-form__input"
                name="name"
                type="text"
                id="username"
                autoComplete="off"
                value={this.state.name}
                onChange={this.handleInputChange}
                required={true}
                minLength="4"
                maxLength="12"
              />
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="vertical-form__input"
                name="password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required={true}
                minLength="4"
                maxLength="12"
              />
              {this.state.error !== null ? (
                <p>{this.state.error.message}</p>
              ) : null}
              <button
                className="button"
                onClick={this.handleSignUp}
                type="submit">
                {" "}
                Sign Up{" "}
              </button>
            </form>
          </section>

          <div className="panel">
            <p>
              {" "}
              If you prefer not to commit to a sign up yet, you can also sign in
              as a guest. This gives you access to all features of a full
              account with the caveat that you will lose your data when your
              browser&amp;s storage is cleared or you log out.
            </p>

            <button onClick={this.signUpGuest} className="button">
              Sign in as a guest
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
