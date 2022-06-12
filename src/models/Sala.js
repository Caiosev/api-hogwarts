const { Model, DataTypes } = require('sequelize');

class Sala extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'salas',
    });
  }

  static associate(models) {
    this.hasMany(models.alunos, { foreignKey: 'sala_id', as: 'sala-aluno' });
  }
}

module.exports = Sala;
