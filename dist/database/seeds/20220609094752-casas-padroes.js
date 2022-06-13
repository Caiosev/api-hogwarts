"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'casas',
      [
        {
          nome: 'Grifinória',
        },
        {
          nome: 'Sonserina',
        },
        {
          nome: 'Lufa-lufa',
        },
        {
          nome: 'Corvinal',
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
