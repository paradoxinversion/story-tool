// const mongoose = require("mongoose");
// const expect = require("chai").expect;
// const addUser = require("../../src/database/actions/addUser");
// const Story = require("../../src/database/schema/Story");
// const User = require("../../src/database/schema/User");
// const bcrypt = require("bcrypt");
// describe("stories", function() {
//   let currentTestUser;
//   before(async function() {
//     await mongoose.connect("mongodb://localhost/storytool-test");
//     currentTestUser = await addUser("Test", "test");
//   });
//   describe("addStory", function() {
//     it("adds a user", async function() {
//       expect(testUser.password).not.to.eql("test");
//     });
//   });

//   describe("getInstance", function() {
//     it("Returns a class instance of the user", async function() {
//       const hashedPass = await bcrypt.hash("test", 10);
//       const newUser = new User({
//         username: "Tester",
//         password: hashedPass
//       });

//       await newUser.save();

//       const classInstance = await newUser.returnUserInstance();
//       expect(classInstance.username).to.eql("Tester");
//       expect(classInstance.stories).to.eql([]);
//       expect(newUser.password).to.eql(hashedPass);
//     });
//   });
//   after(async function() {
//     await User.remove({});
//     await mongoose.disconnect();
//   });
// });
