import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import "./NewSection.css";
class NewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contents: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewSection = this.handleNewSection.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleNewSection(event) {
    event.preventDefault();
    const result = await axios.post(
      `http://localhost:3001/api/stories/${this.props.story._id}/new-section`,
      {
        name: this.state.name,
        content: this.state.content,
        storyId: this.props.story._id
      }
    );
    console.log(result);

    if (result.status == 200) {
      this.props.setMode("story-overview");
    }
  }
  render() {
    return (
      <Fragment>
        <section className="workspace-container">
          <form className="vertical-form full-width">
            <p>New Section</p>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required={true}
              onChange={this.handleInputChange}
            />
            <label htmlFor="content">content</label>
            <textarea
              className="grow workspace-writing-area"
              name="content"
              id="content"
              required={true}
              onChange={this.handleInputChange}
            />
            <button type="submit" onClick={this.handleNewSection}>
              {" "}
              Create{" "}
            </button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(NewSection);
