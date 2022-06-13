"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'casas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
        },
        nota_total: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('casas');
  },
};
