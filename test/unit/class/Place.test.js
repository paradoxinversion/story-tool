const expect = require("chai").expect;
const Place = require("../../../src/classes/Place");
describe("Place", function() {
  describe("setHardLocation", function() {
    context("When passed proper arguments", function() {
      it("Updates the Place's hardLocation", function() {
        const testLocation = new Place("Test Place");
        testLocation.setHardLocation("1234 S. Cool Str", false);
        expect(testLocation.hardLocation).to.eql("1234 S. Cool Str");
        expect(testLocation.isRealWorld).to.eql(false);
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testLocation = new Place("Test Place");

        expect(function() {
          testLocation.setHardLocation("1234007", "derp");
        }).to.throw();
        expect(function() {
          testLocation.setHardLocation(123323, true);
        }).to.throw();
        expect(function() {
          testLocation.setHardLocation(null, undefined);
        }).to.throw();
        expect(function() {
          testLocation.setHardLocation("string", null);
        }).to.throw();
      });
    });
  });
});
