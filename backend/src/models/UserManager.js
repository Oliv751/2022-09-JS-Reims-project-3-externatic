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

  update(user) {
    return this.connection.query(
      `UPDATE ${this.table} SET email = ?, phone = ?, WHERE id = ?`,
      [user.email, parseInt(user.phone, 10), user.id]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
