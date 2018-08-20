import React, { Component } from "react";

class CharacterProfile extends Component {
  constructor(props){
    super(props)
    this.state.className = {
      name: this.props.character.name,
      age: this.props.character.age,
      isMainCharacter: this.props.character.isMainCharacter
    }
  }
  renderProfile(){
    return (
      <section>
        <p>name</p>
      </section>
    )
  }
  renderProfileEdit(){
    return (
      <section>
        <form className="vertical-form">
          <input type="text" value=
        </form>
      </section>
    )
  }
  render() {
    return (
      <section>
        <p>name</p>
      </section>
    );
  }
}

export default CharacterProfile;
