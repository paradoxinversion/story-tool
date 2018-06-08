import React, { Component } from "react";
import axiosInstance from "../../../axiosInstance";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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
    result = await axiosInstance.post("/auth/sign-up", {
      username: this.state.name,
      password: this.state.password
    });

    console.log(result);
    if (result.status === 200) {
      console.log("success");
    } else {
      console.log("something went wrong");
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
              account with the caveat that it will self-destruct in 24 hours.
              While your guest account is active, you will be able to complete
              signup without losing any data.
            </p>
            <button className="button">Sign in as a guest</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
