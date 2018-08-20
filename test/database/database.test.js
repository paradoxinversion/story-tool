const mongoose = require("mongoose");
const expect = require("chai").expect;
const addUser = require("../../src/database/actions/addUser");
const deleteUser = require("../../src/database/actions/deleteUser");
const updateUser = require("../../src/database/actions/updateUser");
const addStory = require("../../src/database/actions/addStory");
const Story = require("../../src/database/schema/Story");
const User = require("../../src/database/schema/User");

const bcrypt = require("bcrypt");
describe("Database Actions", function() {
  before(async function() {
    await mongoose.connect("mongodb://localhost/storytool-test");
  });
  // beforeEach(async function() {
  //   await User.remove({});
  //   await Story.remove({});
  // });
  describe("users", function() {
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
        expect(classInstance.username).to.eql("Tester");
        expect(classInstance.stories).to.eql([]);
        expect(newUser.password).to.eql(hashedPass);
      });
    });

    describe("deleteUser", function() {
      it("Returns true when an existing user is deleted", async function() {
        const testUser = new User({
          username: "Tester",
          password: "naivepassword"
        });
        await testUser.save();
        const result = await deleteUser(testUser._id);
        expect(result).to.eql(true);
      });
    });
    describe("updateUser", function() {
      it("Updates a user and returns its updated userinstance", async function() {
        const testUser = new User({
          username: "Tester",
          password: "naivepassword"
        });
        await testUser.save();
        const userInstance = await updateUser(testUser.username, "Jimbo", "");
        expect(userInstance.username).to.eql("Jimbo");
      });
    });
  });

  describe("Stories", async function() {
    let testUser;
    before(async function() {
      testUser = new User({
        username: "test",
        password: "test",
        isGuest: false
      });
      await testUser.save();
      console.log("created usewr", testUser);
    });
    describe("addStory", function() {
      it("Adds a new story", async function() {
        const testStory = await addStory(
          "Test Story",
          "Tests happen",
          testUser._id
        );

        expect(testStory.title).to.eql("Test Story");
        expect(testStory.synopsis).to.eql("Tests happen");
      });
    });
  });
  after(async function() {
    await User.remove({});
    await Story.remove({});
    await mongoose.disconnect();
  });
});
