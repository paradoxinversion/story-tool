"use strict";
const Base = require("./Base");
class Place extends Base {
  constructor(name) {
    super(name);
    this.hardLocation = "";
    this.isRealWorld = false;
  }

  /*
    Sets a "hard location" (such as a landmark or address) to be associated with location.
    Location can be specified as 'real world', in which case it can be assumed the location
    can be found on a real-world map. This could be useful for mapping locations.
  */
  setHardLocation(newLocation, isRealWorld) {
    try {
      if (typeof newLocation === "string") {
        if (typeof isRealWorld === "boolean") {
          this.hardLocation = newLocation;
          this.isRealWorld = isRealWorld;
        } else {
          const error = new Error(
            `setHardLocation:: Expected isRealWorld to be a boolean but got a(n) ${typeof isRealWorld} instead.`
          );
          throw error;
        }
      } else {
        const error = new Error(
          `setHardLocation:: Expected newLocation to be a string but got a(n) ${typeof newLocation} instead.`
        );
        throw error;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Place;
