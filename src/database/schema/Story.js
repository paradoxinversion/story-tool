"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Story = require("../../classes/Story");
const storySchema = Schema({
  title: String,
  synopsis: String,
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

storySchema.methods.returnStoryInstance = function(err) {
  return new Story(this.name);
};

const StoryModel = mongoose.model("Story", storySchema);

module.exports = StoryModel;
