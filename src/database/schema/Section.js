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
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  createdAt: { type: Date, default: Date.now }
});

sectionSchema.methods.returnSectionInstance = function(err) {
  return new Section(
    this.name,
    this._id,
    this.createdAt,
    this.content,
    this.number,
    this.characters
  );
};

const SectionModel = mongoose.model("Section", sectionSchema);
module.exports = SectionModel;
