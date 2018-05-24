const Base = require("./Base");
class User extends Base {
  constructor(name, id, user) {
    super(name, id);
    this.username = user.username;
    this.stories = user.stories;
  }
}

module.exports = User;
