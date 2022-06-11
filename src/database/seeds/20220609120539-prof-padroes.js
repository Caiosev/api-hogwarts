/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'profs',
      [
        {
          nome: 'Aurora',
          sobrenome: 'Sinistra',
          login: 'aurora_sinistra',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 2,
        },
        {
          nome: 'Silvanus',
          sobrenome: 'Kettleburn',
          login: 'silvanus_kettleburn',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 3,
        },
        {
          nome: 'Filius',
          sobrenome: 'Flitwick',
          login: 'filius_flitwick',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 4,
        },
        {
          nome: 'Quirinus',
          sobrenome: 'Quirrell',
          login: 'quirinus_quirrell',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 5,
        },
        {
          nome: 'Sybill',
          sobrenome: 'Trelawney',
          login: 'sybill_trelawney',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 13,
        },
        {
          nome: 'Rolanda',
          sobrenome: 'Hooch',
          login: 'rolanda_hooch',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 6,
        },
        {
          nome: 'Pomona',
          sobrenome: 'Sprout',
          login: 'pomona_sprout',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 7,
        },
        {
          nome: 'Cuthbert',
          sobrenome: 'Binns',
          login: 'cuthbert_binns',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 8,
        },
        {
          nome: 'Charity',
          sobrenome: 'Burbage',
          login: 'charity_burbage',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 9,
        },
        {
          nome: 'Severus',
          sobrenome: 'Snape',
          login: 'severus_snape',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 10,
        },
        {
          nome: 'Bathsheda',
          sobrenome: 'Babbling',
          login: 'bathsheda_babbling',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 11,
        },
        {
          nome: 'Minerva',
          sobrenome: 'McGonagall',
          login: 'minerva_mcgonagall',
          senha_hash: await bcrypt.hashSync('123456', 8),
          materia_id: 12,
        },
      ],

      {},
    );
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
