/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'prof',
      [
        {
          nome: 'Septima',
          sobrenome: 'Vector',
          login: 'septima_vector',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 1,
        },
        {
          nome: 'Aurora',
          sobrenome: 'Sinistra',
          login: 'aurora_sinistra',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 2,
        },
        {
          nome: 'Silvanus',
          sobrenome: 'Kettleburn',
          login: 'silvanus_kettleburn',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 3,
        },
        {
          nome: 'Filius',
          sobrenome: 'Flitwick',
          login: 'filius_flitwick',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 4,
        },
        {
          nome: 'Quirinus',
          sobrenome: 'Quirrell',
          login: 'quirinus_quirrell',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 5,
        },
        {
          nome: 'Sybill',
          sobrenome: 'Trelawney',
          login: 'sybill_trelawney',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 13,
        },
        {
          nome: 'Rolanda',
          sobrenome: 'Hooch',
          login: 'rolanda_hooch',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 6,
        },
        {
          nome: 'Pomona',
          sobrenome: 'Sprout',
          login: 'pomona_sprout',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 7,
        },
        {
          nome: 'Cuthbert',
          sobrenome: 'Binns',
          login: 'cuthbert_binns',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 8,
        },
        {
          nome: 'Charity',
          sobrenome: 'Burbage',
          login: 'charity_burbage',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 9,
        },
        {
          nome: 'Severus',
          sobrenome: 'Snape',
          login: 'severus_snape',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 10,
        },
        {
          nome: 'Bathsheda',
          sobrenome: 'Babbling',
          login: 'bathsheda_babbling',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 11,
        },
        {
          nome: 'Minerva',
          sobrenome: 'McGonagall',
          login: 'minerva_mcgonagall',
          password_hash: await bcrypt.hashSync('123456', 8),
          materias_id: 12,
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
