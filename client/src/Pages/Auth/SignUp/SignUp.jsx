import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
    result = await axios.post("http://localhost:3001/api/auth/sign-up", {
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
      <Fragment>
        <form>
          <p> Sign Up</p>
          <label htmlFor="username">Username</label>
          <input
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
          <label htmlFor="password">Password</label>
          <input
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
          <button onClick={this.handleSignUp} type="submit">
            {" "}
            Sign Up{" "}
          </button>
        </form>
        <p>
          {" "}
          If you prefer not to commit to a sign up yet, you can also sign in as
          a guest. This gives you access to all features of a full account with
          the caveat that it will self-destruct in 24 hours. While your guest
          account is active, you will be able to complete signup without losing
          any data.
        </p>
        <button>Sign in as a guest</button>
      </Fragment>
    );
  }
}

export default SignUp;
