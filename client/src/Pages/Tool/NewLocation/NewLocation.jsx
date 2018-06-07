import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      notes: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewLocation = this.handleNewLocation.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleNewLocation(event) {
    event.preventDefault();
    const result = await axios.post(
      `http://localhost:3001/api/stories/${this.props.story.id}/new-story`,
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
          <label htmlFor="notes">Description</label>
          <input
            name="notes"
            type="text"
            id="notes"
            required={true}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleNewLocation}>
            {" "}
            Create{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(NewLocation);
