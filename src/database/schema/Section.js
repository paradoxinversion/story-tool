"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Section = require("../../classes/Section");
const sectionSchema = Schema({
  name: String,
  notes: String,
  content: String,
  number: {
    type: Number,
    required: true
  },
  story: {
    type: Schema.Types.ObjectId,
    ref: "Story"
  },
  createdAt: { type: Date, default: Date.now }
});

sectionSchema.methods.returnStoryInstance = function(err) {
  return new Section(this.name);
};

const SectionModel = mongoose.model("Section", sectionSchema);
module.exports = SectionModel;
