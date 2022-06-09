"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('salas', [
      {
        nome: 'Primeiro Ano',
      },
      {
        nome: 'Segundo Ano',
      },
      {
        nome: 'Terceiro Ano',
      },
      {
        nome: 'Quarto Ano',
      },
      {
        nome: 'Quinto Ano',
      },
      {
        nome: 'Sexto Ano',
      },
      {
        nome: 'Setimo Ano',
      },
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
