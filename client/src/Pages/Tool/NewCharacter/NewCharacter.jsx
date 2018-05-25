import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
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
    const result = await axios.post(
      `http://localhost:3001/api/stories/${this.props.story._id}/new-story`,
      {
        name: this.state.name,
        content: this.state.content,
        storyId: this.props.story._id
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
