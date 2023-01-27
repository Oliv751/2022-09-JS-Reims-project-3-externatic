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

  update(consultant) {
    return this.connection.query(
      `update ${this.table} set firstname = ? , lastname = ? , consultant_description = ? where id = ? `,
      [
        consultant.firstName,
        consultant.lastName,
        consultant.consultant_description,
        consultant.consultantId,
      ]
    );
  }

  find(id) {
    return this.connection.query(
      `select user.id, user.phone, user.email, consultant.id as consultant_id, consultant.firstName, consultant.lastName, consultant.consultant_description from user join consultant on user.id = consultant.user_id where user.id = ?`,
      [id]
    );
  }
}

module.exports = ConsultantManager;
