import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.name,
      password: ""
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
    // const result = await axiosInstance.post(
    //   `/stories/${this.props.story.id}/new-story`,
    //   {
    //     name: this.state.name,
    //     content: this.state.content,
    //     storyId: this.props.story.id
    //   }
    // );
    // console.log(result);

    // if (result.status === 200) {
    //   this.props.history.push("/tool/dashboard");
    // }
  }

  renderForm() {
    return (
      <div className="workspace-container">
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
      </div>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default withRouter(Account);
