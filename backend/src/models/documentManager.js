const AbstractManager = require("./AbstractManager");

class DocumentManager extends AbstractManager {
  constructor() {
    super({ table: "document" });
  }
}

module.exports = DocumentManager;
