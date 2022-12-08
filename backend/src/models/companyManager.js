const AbstractManager = require("./AbstractManager");

class CompamyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }
}

module.exports = CompamyManager;
