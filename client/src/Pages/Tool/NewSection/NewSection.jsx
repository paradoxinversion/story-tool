import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
class NewCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contents: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewCharacter = this.handleNewCharacter.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  async handleNewCharacter(event) {
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
          <label htmlFor="content">content</label>
          <input
            name="content"
            type="text"
            id="content"
            required={true}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleNewCharacter}>
            {" "}
            Create{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(NewCharacter);
