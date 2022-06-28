module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'login', { type: Sequelize.STRING });
    await queryInterface.addColumn('alunos', 'senha_hash', { type: Sequelize.STRING });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('alunos', 'login');
    await queryInterface.removeColumn('alunos', 'senha_hash');
  },
};
