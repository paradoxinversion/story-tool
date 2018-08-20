"use strict";
const Base = require("./Base");
class Section extends Base {
  constructor(name, id, createdAt, content, number, characters) {
    super(name, id, createdAt);
    this.content = content;
    this.number = number;
    this.characters = characters;
  }

  setContent(newContent) {
    try {
      if (typeof newContent === "string") {
        this.content = newContent;
        return this.content;
      } else {
        const error = new Error(
          `setContent:: Expected a string but got a(n) ${typeof newContent} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Section;
