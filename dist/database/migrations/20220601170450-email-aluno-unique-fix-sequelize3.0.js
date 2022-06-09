"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email Já Existe',
        },
        validate: {
          isEmail: {
            msg: 'Email Invalido',
          },
        },
      },
    );
  },

  async down() {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
