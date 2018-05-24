"use strict";
const Base = require("./Base");
class Person extends Base {
  constructor(name, id) {
    super(name, id);
    this.age = 18;
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

module.exports = Person;
