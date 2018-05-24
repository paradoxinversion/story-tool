"use strict";

class Base {
  constructor(name, id) {
    this.name = name;
    this.notes = "";
    this.id = id;
  }

  setName(newName) {
    try {
      if (typeof newName === "string") {
        this.name = newName;
        return this.name;
      } else {
        const error = new Error(
          `setName:: Expected a string but got a(n) ${typeof newName} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }

  setNotes(notes) {
    try {
      if (typeof notes === "string") {
        this.notes = notes;
        return this.notes;
      } else {
        const error = new Error(
          `setNotes:: Expected a string but got a(n) ${typeof notes} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Base;
