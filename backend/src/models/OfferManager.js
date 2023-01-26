const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  insert(data) {
    const {
      companyDescription,
      offerName,
      offerDescription,
      contract,
      location,
      consultantId,
    } = data;
    return this.connection.query(
      `INSERT INTO ${this.table} (company_description, offer_name, offer_description, contract, location, consultant_id, publication_date) VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [
        companyDescription,
        offerName,
        offerDescription,
        contract,
        location,
        consultantId,
      ]
    );
  }

  findAllByConsultantId(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE consultant_id = ?`,
      [id]
    );
  }
}

module.exports = OfferManager;
