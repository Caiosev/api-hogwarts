const { Model, DataTypes } = require('sequelize');

class Prova extends Model {
  static init(sequelize) {
    super.init({
      valor: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'provas',
    });
  }

  static associate(models) {
    this.belongsTo(models.alunos, { foreignKey: 'aluno_id', as: 'prova-aluno' });
    this.belongsTo(models.profs, { foreignKey: 'prof_id', as: 'prova-prof' });
  }
}

module.exports = Prova;
