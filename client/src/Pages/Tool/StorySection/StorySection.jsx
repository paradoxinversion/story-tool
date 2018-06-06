import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import deleteStorySection from "../../../toolCommands/section/deleteStorySection";
import StoryParts from "../../../Components/StoryParts/StoryParts";
import axios from "axios";
class StorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: null,
      editing: false,
      name: "",
      content: ""
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditSection = this.handleEditSection.bind(this);
  }

  async getSectionData() {
    const result = await axios.get(
      `http://localhost:3001/api/stories/${this.props.workingStory._id}/${
        this.props.workingSection._id
      }`
    );

    if (result.status === 200) {
      this.props.setWorkingSection(result.data.section);

      this.setState({
        section: this.props.workingSection,
        name: this.props.workingSection.name,
        content: this.props.workingSection.content
      });
    }
  }

  async componentDidMount() {
    await this.getSectionData();
    this.setState({
      section: this.props.workingSection,
      name: this.props.workingSection.name,
      content: this.props.workingSection.content
    });
  }
  componentWillUnmount() {
    this.props.setWorkingSection(null);
  }

  toggleEditMode() {
    if (this.state.editing === false) {
      this.setState({
        editing: true
      });
    } else {
      this.setState({
        editing: false
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleEditSection(event) {
    event.preventDefault();
    const result = await axios.put(
      `http://localhost:3001/api/stories/${this.props.story._id}/${
        this.props.workingSection._id
      }`,
      {
        name: this.state.name,
        content: this.state.content
      }
    );

    if (result.status == 200) {
      this.setState({
        editing: false
      });
      await this.getSectionData();
    }
  }

  renderEditForm() {
    if (!this.state.editing) {
      return (
        <div>
          {this.state.section ? (
            <div className="story">
              <button onClick={this.toggleEditMode}>Edit Part</button>
              <button
                onClick={async () => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  ) {
                    const result = await deleteStorySection(
                      this.props.story._id,
                      this.state.section._id
                    );

                    if (result.status === 200) {
                      this.props.setWorkingSection(null);
                      this.props.setMode("story-sections");
                    }
                  }
                }}>
                Delete Part
              </button>
              <p>{this.state.section.name}</p>
              <p>{this.state.section.content}</p>
            </div>
          ) : (
            <div>
              <p> Section loading... </p>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <form className="vertical-form full-width">
          <p>Edit Section</p>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            required={true}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="content">content</label>
          <textarea
            className="grow workspace-writing-area"
            name="content"
            id="content"
            required={true}
            onChange={this.handleInputChange}
            value={this.state.content}
          />
          <button type="submit" onClick={this.handleEditSection}>
            {" "}
            Edit{" "}
          </button>
          <button onClick={this.toggleEditMode}> Cancel</button>
        </form>
      );
    }
  }
  render() {
    return (
      <section className="workspace-container">{this.renderEditForm()}</section>
    );
  }
}

export default withRouter(StorySection);
