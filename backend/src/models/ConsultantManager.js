const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  insert(consultant) {
    return this.connection.query(
      `insert into ${this.table} ( firstname , lastname , consultant_description, user_id) value (? , ? , ? , ?)`,
      [
        consultant.firstname,
        consultant.lastname,
        consultant.consultant_description,
        consultant.id,
      ]
    );
  }
}

module.exports = ConsultantManager;
