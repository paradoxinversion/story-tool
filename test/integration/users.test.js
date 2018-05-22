const mongoose = require("mongoose");
const expect = require("chai").expect;
const addUser = require("../../src/database/actions/addUser");
const User = require("../../src/database/schema/User");
const bcrypt = require("bcrypt");
describe("users", function() {
  before(async function() {
    await mongoose.connect("mongodb://localhost/storytool-test");
  });
  describe("addUser", function() {
    it("adds a user", async function() {
      const testUser = await addUser("Test", "test");
      expect(testUser.password).not.to.eql("test");
    });
  });

  describe("getInstance", function() {
    it("Returns a class instance of the user", async function() {
      const hashedPass = await bcrypt.hash("test", 10);
      const newUser = new User({
        username: "Tester",
        password: hashedPass
      });

      await newUser.save();

      const classInstance = await newUser.returnUserInstance();
      console.log("Instane", classInstance);
      expect(classInstance).to.eql({ username: "Tester", stories: [] });
    });
  });
  after(async function() {
    await User.remove({});
    await mongoose.disconnect();
  });
});
