import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
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
    const result = await axios.post("http://localhost:3001/api/stories/new", {
      title: this.state.title,
      synopsis: this.state.synopsis
    });
    console.log(result);
    if (result.status === 200) {
      this.props.history.push("/tool/dashboard");
    }
  }
  render() {
    return (
      <Fragment>
        <form>
          <p>New Story</p>
          <label htmlFor="title">Title</label>
          <input
            name="name"
            type="text"
            id="title"
            autoComplete="title"
            required={true}
            minLength="3"
            maxLength="32"
            onChange={this.handleInputChange}
          />
          <label htmlFor="synopsis">Synopsis</label>
          <input
            name="synopsis"
            type="text"
            id="synopsis"
            required={true}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleNewStory}>
            {" "}
            Create{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(NewStory);
