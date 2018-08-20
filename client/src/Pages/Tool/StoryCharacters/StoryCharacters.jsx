"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CharacterCard from "../../../Components/CharacterCard/CharacterCard";
import getStoryCharacters from "../../../toolCommands/character/getStoryCharacters";
import PropTypes from "prop-types";
class StoryCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyCharacters: []
    };
  }

  async componentDidMount() {
    const storyCharacters = await getStoryCharacters(
      this.props.characterPool,
      this.props.workingStory.id
    );
    console.log("SC", this.state.storyCharacters);

    this.setState({
      storyCharacters
    });
  }

  async componentWillUnmount() {
    this.setState({
      storyCharacters: []
    });
  }
  render() {
    console.log(this.state.storyCharacters);
    return (
      <section className="workspace-container">
        <button
          className="button button-primary "
          onClick={() => {
            this.props.setMode("new-character");
          }}>
          New Character
        </button>
        {this.state.storyCharacters.length > 0 ? (
          this.state.storyCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div>
            <p> No characters exist in this story </p>
          </div>
        )}
      </section>
    );
  }
}

export default withRouter(StoryCharacters);
