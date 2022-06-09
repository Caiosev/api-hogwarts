"use strict";/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materias', [
      {
        nome: 'Aritmancia',
      },
      {
        nome: 'Astronomia',
      },
      {
        nome: 'Trato das Criaturas Mágicas',
      },
      {
        nome: 'Feitiços',
      },
      {
        nome: 'Defesa Contra as Artes das Trevas',
      },
      {
        nome: 'Vôo',
      },
      {
        nome: 'Herbologia',
      },
      {
        nome: 'História da Magia',
      },
      {
        nome: 'Estudos trouxas',
      },
      {
        nome: 'Poções',
      },
      {
        nome: 'Estudo de Runas Antigas',
      },
      {
        nome: 'Transfiguração',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
