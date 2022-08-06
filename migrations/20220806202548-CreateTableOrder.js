`use strict`;

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE order_1 (
        id varchar(36) NOT NULL,
        number int NOT NULL,
        customer_name varchar(200) NOT NULL,
        issuance_date date,
        invoicing_date date ,
        order_value float NOT NULL,
        percentage_commission int NOT NULL,
        PRIMARY KEY(id)
      );
    `);
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.sequelize.query(`
    DROP TABLE order_1
   `)
  }
};

