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
  },
  createdAt: { type: Date, default: Date.now }
});

storySchema.methods.returnStoryInstance = function(err) {
  return new Story(
    this.title,
    this._id,
    this.title,
    this.synopsis,
    this.author
  );
};

const StoryModel = mongoose.model("Story", storySchema);

module.exports = StoryModel;
