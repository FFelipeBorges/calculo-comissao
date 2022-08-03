'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE pedidos(
        id varchar(36) NOT NULL,
        numero_pedido varchar(20) NOT NULL,
        nome_cliente varchar(200) NOT NULL,
        data_emissao date NOT NULL,
        data_faturamento date NOT NULL,
        valor_pedido varchar(20) NOT NULL,
        porcentagem_comissao varchar(2) NOT NULL,
        PRIMARY KEY(id)
      );
    `);
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.sequelize.query(`
    DROP TABLE pedidos
   `)
  }
};
