"use strict";

const Schema = require("mongoose").Schema;
const Character = require("../../classes/Character");
const mongoose = require("mongoose");
const characterSchema = Schema({
  name: String,
  notes: String,
  age: Number,
  isMainCharacter: Boolean,
  stories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Story"
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: { type: Date, default: Date.now }
});

characterSchema.methods.returnCharacterInstance = function(err) {
  return new Character(this.name, this._id, this.createdAt, this);
};
const CharacterModel = mongoose.model("Character", characterSchema);
module.exports = CharacterModel;
