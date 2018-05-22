"use strict";
const Base = require("./Base");
class Thing extends Base {
  constructor(name) {
    super(name);
    this.specialProperties = "";
  }

  setSpecialProperties(newSpecialProperties) {
    try {
      if (typeof newSpecialProperties === "string") {
        this.SpecialProperties = newSpecialProperties;
        return this.SpecialProperties;
      } else {
        const error = new Error(
          `setSpecialProperties:: Expected a string but got a(n) ${typeof newSpecialProperties} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }
  setSpecialProperties(specialProperties) {
    this.specialProperties = specialProperties;
  }
}

module.exports = Thing;
