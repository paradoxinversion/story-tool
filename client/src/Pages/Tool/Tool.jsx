import React, { Component, Fragment, Link } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import NewStory from "./NewStory/NewStory";
import Stories from "./Stories/Stories";
import Story from "./Story/Story";
import NewCharacter from "./NewCharacter/NewCharacter";
import NewLocation from "./NewLocation/NewLocation";
import NewObject from "./NewObject/NewObject";
import StorySections from "./StorySections/StorySections";
import StorySection from "./StorySection/StorySection";
import NewSection from "./NewSection/NewSection";
import CharacterPool from "./CharacterPool/CharacterPool";
import StoryCharacters from "./StoryCharacters/StoryCharacters";
import getUserCharacters from "../../toolCommands/character/getUserCharacters";
import getUserStories from "../../toolCommands/story/getUserStories";
const toolComponents = {
  ["stories-list"]: Stories,
  ["new-story"]: NewStory,
  ["story-overview"]: Story,
  ["new-character"]: NewCharacter,
  ["new-location"]: NewLocation,
  ["new-object"]: NewObject,
  ["story-sections"]: StorySections,
  ["view-section"]: StorySection,
  ["new-section"]: NewSection,
  ["character-pool"]: CharacterPool,
  ["story-characters"]: StoryCharacters
};
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "stories-list",
      stories: null,
      workingStory: null,
      workingSection: null,
      workingSections: null,
      characterPool: null
    };
    this.setMode = this.setMode.bind(this);
    this.setWorkingStory = this.setWorkingStory.bind(this);
    this.setWorkingSection = this.setWorkingSection.bind(this);
    this.setWorkingSections = this.setWorkingSections.bind(this);
    this.setStories = this.setStories.bind(this);
    this.setCharacterPool = this.setCharacterPool.bind(this);
  }

  async setMode(mode) {
    await this.setState({
      mode
    });
  }

  async setStories(stories) {
    await this.setState({
      stories
    });
  }

  async setWorkingStory(story) {
    await this.setState({
      workingStory: story
    });
  }

  async setWorkingSection(section) {
    await this.setState({
      workingSection: section
    });
  }

  async setWorkingSections(sections) {
    await this.setState({
      workingSections: sections
    });
  }
  async setCharacterPool(characters) {
    console.log("chars", characters);
    await this.setState({
      characterPool: characters
    });
  }

  async componentDidMount() {
    const storyData = await Promise.all([
      getUserStories(this.props.user.id),
      getUserCharacters()
    ]);
    this.setStories(storyData[0].data.stories);
    this.setCharacterPool(storyData[1].data.characters);
  }
  render() {
    const CurrentWorkspace = toolComponents[this.state.mode];
    const { match } = this.props;
    return (
      <div className="horizontal-container">
        <Dashboard
          workingStory={this.state.workingStory}
          workingSection={this.state.workingSection}
          setMode={this.setMode}
          {...this.props}
        />
        <CurrentWorkspace
          stories={this.state.stories}
          setStories={this.setStories}
          setWorkingStory={this.setWorkingStory}
          setWorkingSection={this.setWorkingSection}
          workingStory={this.state.workingStory}
          workingSection={this.state.workingSection}
          workingSections={this.state.workingSections}
          setWorkingSections={this.setWorkingSections}
          setCharacterPool={this.setCharacterPool}
          characterPool={this.state.characterPool}
          setMode={this.setMode}
          {...this.props}
        />
      </div>
    );
  }
}

export default withRouter(Tool);
