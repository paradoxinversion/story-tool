const Base = require("./Base");
class User extends Base {
  constructor(name, id, user, createdAt) {
    super(name, id, createdAt);
    this.username = user.username;
    this.stories = user.stories;
  }
}

module.exports = User;
