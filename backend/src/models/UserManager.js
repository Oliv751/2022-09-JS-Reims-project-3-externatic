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
      `UPDATE ${this.table} SET email = ?, phone = ? WHERE id = ?`,
      [user.email, user.phone, user.id]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select user.*, candidate.id as candidate_id, consultant.id as consultant_id from user left join candidate on user.id = candidate.user_id left join consultant on user.id = consultant.user_id where email = ?`,
      [email]
    );
  }

  findCandidateByUserId(id) {
    return this.connection.query(
      `select user.*, candidate.* from user left join candidate on user.id = candidate.user_id  where user.id = ?`,
      [id]
    );
  }

  findConsultantByUserId(id) {
    return this.connection.query(
      `select user.*, consultant.* from user left join consultant on user.id = consultant.user_id  where user.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
