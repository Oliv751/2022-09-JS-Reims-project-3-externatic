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
      `INSERT ${this.table} SET company_description = ?, offer_name = ?, offer_description = ?, contract = ?, location = ?, consultant_id = ?`,
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
}

module.exports = OfferManager;
