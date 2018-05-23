const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _User = require("../../classes/User");
const bcrypt = require("bcrypt");
const userSchema = Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

userSchema.methods.returnUserInstance = function(err) {
  return new _User(this);
};
userSchema.methods.verifyPassword = async function(password) {
  console.log(password, this.password);
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
