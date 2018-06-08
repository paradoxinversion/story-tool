"use strict";

import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";
import createStory from "../../../toolCommands/story/createStory";
class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      synopsis: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewStory = this.handleNewStory.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleNewStory(event) {
    event.preventDefault();
    const result = await createStory(
      this.state.title,
      this.state.synopsis,
      this.props.user.id
    );
    if (result.status === 200) {
      this.props.setMode("stories-list");
    }
  }

  render() {
    return (
      <div className="workspace-container">
        <form className="vertical-form">
          <p className="vertical-form__title">New Story</p>
          <label className="vertical-form__label" htmlFor="title">
            Title
          </label>
          <input
            className="vertical-form__input"
            name="title"
            type="text"
            id="title"
            autoComplete="title"
            required={true}
            minLength="3"
            maxLength="32"
            onChange={this.handleInputChange}
          />
          <label className="vertical-form__label" htmlFor="synopsis">
            Synopsis
          </label>
          <textarea
            className="vertical-form__input"
            name="synopsis"
            type="text"
            id="synopsis"
            required={true}
            maxLength="3000"
            onChange={this.handleInputChange}
          />
          <button
            className="button"
            type="submit"
            onClick={this.handleNewStory}>
            {" "}
            Create{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewStory);
