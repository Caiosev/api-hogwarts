const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sangue_status: DataTypes.STRING,
      varinha: DataTypes.STRING,
      patrono: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'alunos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.salas, { foreignKey: 'sala_id', as: 'aluno-sala' });
    this.belongsTo(models.casas, { foreignKey: 'casa_id', as: 'aluno-casa' });
    this.hasMany(models.fotoalunos, { foreignKey: 'aluno_id', as: 'aluno-foto' });
    this.hasMany(models.provas, { foreignKey: 'aluno_id', as: 'aluno-prova' });
  }
}

module.exports = Aluno;
