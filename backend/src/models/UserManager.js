const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (email , password , phone , role) values (? , ? , ? , ?)`,
      [user.email, user.hashedPassword, parseInt(user.phone, 10), user.role]
    );
  }
}

module.exports = UserManager;
