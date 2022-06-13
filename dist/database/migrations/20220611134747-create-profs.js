"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'profs',
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
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha_hash: {
          type: Sequelize.STRING,
          allowNull: false,
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
        materia_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'materias',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('profs');
  },
};
