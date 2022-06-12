module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'alunos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sangue_status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        varinha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        patrono: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sala_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'salas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        casa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'casas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
    await queryInterface.dropTable('alunos');
  },
};
