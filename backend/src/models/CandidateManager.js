const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  /**
   * inserer dans la table user
   * email , password , role , phone
   *
   * inserer dans la table candidat
   * fistname , lastname
   */
  insert(candidate) {
    return this.connection.query(
      `insert into ${this.table} ( firstname , lastname , user_id) value (? , ? , ?)`,
      [candidate.firstname, candidate.lastname, candidate.id]
    );
  }

  find(id) {
    return this.connection.query(
      `select user.id, user.phone, user.email, candidate.id as candidate_id, candidate.firstName, candidate.lastName, candidate.address, candidate.contract from user join candidate on user.id = candidate.user_id where user.id = ?`,
      [id]
    );
  }
}

module.exports = CandidateManager;
