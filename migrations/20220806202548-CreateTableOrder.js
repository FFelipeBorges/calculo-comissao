`use strict`;

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE transactions (
        id varchar(36) NOT NULL,
        number int NOT NULL,
        customer_name varchar(200) NOT NULL,
        issue_date date,
        invoicing_date date ,
        value float NOT NULL,
        percentage_commission int NOT NULL,
        PRIMARY KEY(id)
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
    DROP TABLE transactions
   `)
  }
};

