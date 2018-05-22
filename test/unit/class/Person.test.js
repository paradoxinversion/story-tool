const expect = require("chai").expect;
const Person = require("../../../src/classes/Person");
describe("Person", function() {
  // before(function(){

  // })
  describe("setName", function() {
    context("When passed a string", function() {
      it("replaces the current Person's name with a new string", function() {
        const testPerson = new Person("Test Person");
        testPerson.setName("Homeslice");
        expect(testPerson.name).to.eql("Homeslice");
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testPerson = new Person("Test Person");

        expect(function() {
          testPerson.setName(1234007);
        }).to.throw();
        expect(function() {
          testPerson.setName(true);
        }).to.throw();
        expect(function() {
          testPerson.setName(undefined);
        }).to.throw();
        expect(function() {
          testPerson.setName(null);
        }).to.throw();
      });
    });
  });

  describe("setAge", function() {
    context("When passed a number", function() {
      it("replaces the current Person's Age with a new number", function() {
        const testPerson = new Person("Test Person");
        testPerson.setAge(22);
        expect(testPerson.age).to.eql(22);
      });
    });

    context("When passed anything else", function() {
      it("Throws an error", function() {
        const testPerson = new Person("Test Person");

        expect(function() {
          testPerson.setAge("1234007");
        }).to.throw();
        expect(function() {
          testPerson.setAge(true);
        }).to.throw();
        expect(function() {
          testPerson.setAge(undefined);
        }).to.throw();
        expect(function() {
          testPerson.setAge(null);
        }).to.throw();
      });
    });
  });
});
