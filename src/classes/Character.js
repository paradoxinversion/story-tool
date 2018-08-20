"use strict";
const Base = require("./Base");

class Character extends Base {
  /**
   *
   * @param {*} name
   * @param {*} id
   * @param {*} createdAt
   * @param {*} character
   * @param {*} stories the ids of stories this character appears in
   */
  constructor(name, id, createdAt, character, stories) {
    super(name, id, createdAt);
    this.age = character.age;
    this.isMainCharacter = character.isMainCharacter;
    this.stories = character.stories;
  }

  setAge(newAge) {
    try {
      if (typeof newAge === "number") {
        this.age = newAge;
        return this.age;
      } else {
        const error = new Error(
          `setSpecialProperties:: Expected a string but got a(n) ${typeof newAge} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Character;
