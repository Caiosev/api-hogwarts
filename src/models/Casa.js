const { Model, DataTypes } = require('sequelize');

class Casa extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      nota_total: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'casas',
    });
  }

  static associate(models) {
    this.hasMany(models.alunos, { foreignKey: 'casa_id', as: 'casa-aluno' });
  }
}

module.exports = Casa;
