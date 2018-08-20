import React from "react";
import "./CharacterCard.css";
import PropTypes from "prop-types";
const CharacterCard = props => {
  return (
    <div className="character-card">
      <p className="character-card__name">{props.character.name}</p>
      <p className="character-card__text">{props.character.age}</p>
      <p>
        {props.character.isMainCharacter
          ? "Main Character"
          : "Supporting Character"}
      </p>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};
export default CharacterCard;
