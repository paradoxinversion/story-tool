"use strict";
const Base = require("./Base");
class Thing extends Base {
  constructor(name, id, createdAt) {
    super(name, id, createdAt);
    this.specialProperties = "";
  }

  setSpecialProperties(newSpecialProperties) {
    try {
      if (typeof newSpecialProperties === "string") {
        this.specialProperties = newSpecialProperties;
        return this.specialProperties;
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
}

module.exports = Thing;
