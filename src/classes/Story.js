"use strict";
const Base = require("./Base");
class Story extends Base {
  constructor(name, id, title, synopsis, author) {
    super(name, id);
    this.title = title;
    this.synopsis = synopsis;
    this.author = author;
  }
}

module.exports = Story;
