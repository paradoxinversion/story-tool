"use strict";

const Schema = require("mongoose").Schema;
const Person = require("../../classes/Person");
const PersonSchema = Schema({
  name: String,
  notes: String,
  age: Number
});

PersonSchema.methods.returnPersonInstance = function(err) {
  return new Person(this.name);
};
