import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
class NewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
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
    const result = await axiosInstance.post(
      `/stories/${this.props.story.id}/new-story`,
      {
        name: this.state.name,
        content: this.state.content,
        storyId: this.props.story.id
      }
    );
    console.log(result);

    if (result.status === 200) {
      this.props.history.push("/tool/dashboard");
    }
  }
  render() {
    return (
      <Fragment>
        <form>
          <p>New Section</p>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            required={true}
            onChange={this.handleInputChange}
          />
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="text"
            id="age"
            required={true}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleNewSection}>
            {" "}
            Create{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(NewSection);
