const expect = require("chai").expect;
const Thing = require("../classes/Thing");
describe("Thing", function() {
  // before(function(){

  // })
  describe("setName", function() {
    context("When passed a string", function() {
      it("replaces the current Thing's name with a new string", function() {
        const testThing = new Thing("Test Thing");
        testThing.setName("Homeslice");
        expect(testThing.name).to.eql("Homeslice");
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testThing = new Thing("Test Thing");

        expect(function() {
          testThing.setName(1234007);
        }).to.throw();
        expect(function() {
          testThing.setName(true);
        }).to.throw();
        expect(function() {
          testThing.setName(undefined);
        }).to.throw();
        expect(function() {
          testThing.setName(null);
        }).to.throw();
      });
    });
  });

  describe("setDescription", function() {
    context("When passed a string", function() {
      it("replaces the current Thing's description with a new string", function() {
        const testThing = new Thing("Test Thing");
        testThing.setSpecialProperties("It's SPECIAL");
        expect(testThing.specialProperties).to.eql("It's SPECIAL");
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testThing = new Thing("Test Thing");

        expect(function() {
          testThing.setDescription(1234007);
        }).to.throw();
        expect(function() {
          testThing.setDescription(true);
        }).to.throw();
        expect(function() {
          testThing.setDescription(undefined);
        }).to.throw();
        expect(function() {
          testThing.setDescription(null);
        }).to.throw();
      });
    });
  });
});
