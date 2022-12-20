const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  insert(consultant) {
    return this.connection.query(
      `insert into ${this.table} ( firstname , lastname , user_id) value (? , ? , ?)`,
      [consultant.firstname, consultant.lastname, consultant.id]
    );
  }
}

module.exports = ConsultantManager;
