"user strict";

import React, { Component, Fragment } from "react";
import attemptUserDelete from "../../../toolCommands/user/attemptUserDelete";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import store from "store";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.name,
      password: "",
      currentMessage: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAccountEdit = this.handleAccountEdit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleAccountEdit(event) {
    event.preventDefault();

    const result = await axiosInstance.put(
      `/user`,
      {
        username: this.state.username,
        password: this.state.password
      },
      { headers: { Authorization: `Bearer ${store.get("storytool").token}` } }
    );
    console.log(result);

    if (result.status === 200) {
      this.setState({
        currentMessage: "Account Updated!"
      });
      this.props.setAuthentication(true, result.data.user);
    }
  }

  renderForm() {
    return (
      <form className="vertical-form ">
        <p className="vertical-form__title">User Account</p>
        <label className="vertical-form__label" htmlFor="username">
          Name
        </label>
        <input
          className="vertical-form__input"
          name="username"
          type="text"
          id="username"
          required={true}
          onChange={this.handleInputChange}
          value={this.state.username}
        />
        <label className="vertical-form__label" htmlFor="password">
          New Password (leave blank to keep current)
        </label>
        <input
          className="vertical-form__input"
          name="password"
          type="password"
          id="password"
          minLength="4"
          maxLength="64"
          onChange={this.handleInputChange}
        />
        <button
          className="button"
          type="submit"
          onClick={this.handleAccountEdit}>
          {" "}
          Edit Account{" "}
        </button>
      </form>
    );
  }

  render() {
    return (
      <div className="workspace-container">
        {this.state.currentMessage !== null ? (
          <div className="panel">
            <p>{this.state.currentMessage}</p>
          </div>
        ) : null}
        {this.renderForm()}
        <button
          className="button"
          onClick={async () => {
            if (
              window.confirm("Are you sure you wish to delete your account?")
            ) {
              const userDeletionResult = await attemptUserDelete(
                this.props.user.id
              );

              if (userDeletionResult.status === 200) {
                this.props.history.push("/");
                this.props.setAuthentication(false, null);
              }
            }
          }}>
          Delete Account
        </button>
      </div>
    );
  }
}

export default withRouter(Account);
