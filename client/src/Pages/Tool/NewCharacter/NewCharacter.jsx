import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import createCharacter from "../../../toolCommands/character/createCharacter";
class NewCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      isMainCharacter: false
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
    const character = {
      name: this.state.name,
      age: this.state.age,
      isMainCharacter: this.state.isMainCharacter
    };
    const storyId =
      this.props.workingStory !== null ? this.props.workingStory.id : undefined;

    const characterResults = await createCharacter(character, storyId);
    console.log(characterResults);

    if (characterResults.status === 200) {
      this.props.setMode("character-pool");
    }
  }
  render() {
    return (
      <Fragment>
        <form className="vertical-form">
          <p className="vertical-form__title">New Character</p>
          <label className="vertical-form__label" htmlFor="name">
            Name
          </label>
          <input
            className="vertical-form__input"
            name="name"
            type="text"
            id="name"
            required={true}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label className="vertical-form__label" htmlFor="age">
            Age
          </label>
          <input
            className="vertical-form__input"
            name="age"
            type="text"
            id="age"
            required={true}
            onChange={this.handleInputChange}
            value={this.state.age}
          />
          <label className="vertical-form__label" htmlFor="isMainCharacter">
            Main Character?
          </label>
          <input
            className="vertical-form__input"
            name="isMainCharacter"
            type="checkbox"
            id="isMainCharacter"
            required={true}
            onChange={this.handleInputChange}
            value={this.state.isMainCharacter}
          />
          <button
            className="button button--positive"
            type="submit"
            onClick={this.handleNewCharacter}>
            {" "}
            Create{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(NewCharacter);
