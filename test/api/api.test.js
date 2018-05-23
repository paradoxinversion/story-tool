const mongoose = require("mongoose");
const expect = require("chai").expect;
const addUser = require("../../src/database/actions/addUser");
const User = require("../../src/database/schema/User");
const bcrypt = require("bcrypt");
describe("users", function() {
  before(async function() {
    await mongoose.connect("mongodb://localhost/storytool-test");
  });

  after(async function() {
    await User.remove({});
    await mongoose.disconnect();
  });
});
