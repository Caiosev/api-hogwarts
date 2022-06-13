"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'provas',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'alunos',
            key: 'id',
          },
        },
        prof_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'profs',
            key: 'id',
          },
        },
        valor: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('provas');
  },
};
