"use strict";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import getUserCharacters from "../../../toolCommands/character/getUserCharacters";
import CharacterCard from "../../../Components/CharacterCard/CharacterCard";

class CharacterPool extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // const characterData = await getUserCharacters();
    // if (characterData.status === 200) {
    //   this.props.setCharacterPool(characterData.data.characters);
    // }
  }

  render() {
    return (
      <section className="workspace-container">
        <button
          className="button"
          onClick={() => {
            this.props.setMode("new-character");
          }}>
          Create New character
        </button>
        {this.props.characterPool !== null &&
        this.props.characterPool.length > 0 ? (
          <div>
            <p>There are characters</p>
            {this.props.characterPool.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p>You have not created any characters yet</p>
        )}
      </section>
    );
  }
}

export default withRouter(CharacterPool);
