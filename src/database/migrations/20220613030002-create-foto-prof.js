module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'fotoprofs',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        prof_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'profs',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        originalname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        filename: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('fotoprofs');
  },
};
