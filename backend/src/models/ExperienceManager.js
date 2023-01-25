const AbstractManager = require("./AbstractManager");

class ExperienceManager extends AbstractManager {
  constructor() {
    super({ table: "experience" });
  }

  insert(experience) {
    return this.connection.query(
      `insert into ${this.table} ( job_name, company_name, experience_description, startDate, endDate, category_id, candidate_id) value(? , ? , ? , ? , ? , ? , ?)`,
      [
        experience.job_name,
        experience.company_name,
        experience.experience_description,
        experience.startDate,
        experience.endDate,
        experience.category_id,
        experience.candidate_id,
      ]
    );
  }

  update(experience) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      experience,
      experience.id,
    ]);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ExperienceManager;
