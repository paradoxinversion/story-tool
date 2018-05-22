const expect = require("chai").expect;
const Base = require("../../../src/classes/Base");
describe("Base", function() {
  describe("setName", function() {
    context("When passed a string", function() {
      it("replaces the current Thing's name with a new string", function() {
        const testBase = new Base("Test Base");
        testBase.setName("Homeslice");
        expect(testBase.name).to.eql("Homeslice");
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testBase = new Base("Test Base");

        expect(function() {
          testBase.setName(1234007);
        }).to.throw();
        expect(function() {
          testBase.setName(true);
        }).to.throw();
        expect(function() {
          testBase.setName(undefined);
        }).to.throw();
        expect(function() {
          testBase.setName(null);
        }).to.throw();
      });
    });
  });

  describe("setDescription", function() {
    context("When passed a string", function() {
      it("replaces the current Thing's description with a new string", function() {
        const testBase = new Base("Test Base");
        testBase.setNotes("A");
        expect(testBase.notes).to.eql("A");
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testBase = new Base("Test Base");

        expect(function() {
          testBase.setNotes(1234007);
        }).to.throw();
        expect(function() {
          testBase.setNotes(true);
        }).to.throw();
        expect(function() {
          testBase.setNotes(undefined);
        }).to.throw();
        expect(function() {
          testBase.setNotes(null);
        }).to.throw();
      });
    });
  });
});
