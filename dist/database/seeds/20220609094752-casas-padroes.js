"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'casas',
      [
        {
          nome: 'Grifinória',
          nota: 0,
        },
        {
          nome: 'Sonserina',
          nota: 0,
        },
        {
          nome: 'Lufa-lufa',
          nota: 0,
        },
        {
          nome: 'Corvinal',
          nota: 0,
        },
      ],

      {},
    );
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
