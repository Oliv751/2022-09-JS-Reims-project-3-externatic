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

  findByEmail(email) {
    return this.connection.query(
      `select user.*, candidate.id as candidate_id, consultant.id as consultant_id from user left join candidate on user.id = candidate.user_id left join consultant on user.id = consultant.user_id where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
