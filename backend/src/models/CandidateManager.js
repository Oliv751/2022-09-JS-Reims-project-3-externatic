const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  /**
   * inseret dans la table user
   * email , password , role , phone
   *
   * insertet dans la table candidat
   * fistname , lastname
   */
  insert(candidate) {
    return this.connection.query(
      `insert into ${this.table} ( firstname , lastname , user_id) value (? , ? , ?)`,
      [candidate.firstname, candidate.lastname, candidate.id]
    );
  }
}

module.exports = CandidateManager;
