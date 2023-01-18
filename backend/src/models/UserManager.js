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
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findJoinCandidate(id) {
    return this.connection.query(
      `select user.id, user.phone, user.email, candidate.id as candidate_id, candidate.firstName, candidate.lastName, candidate.address, candidate.contract from user join candidate on user.id = candidate.user_id where user.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
