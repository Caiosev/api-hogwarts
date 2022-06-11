module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'salas',
      'created_at',
      { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('now') },
    );
    await queryInterface.changeColumn(
      'salas',
      'updated_at',
      { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('now') },
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
