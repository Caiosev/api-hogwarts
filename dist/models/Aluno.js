"use strict";const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sangue_status: DataTypes.STRING,
      varinha: DataTypes.STRING,
      patrono: DataTypes.STRING,
      login: DataTypes.STRING,
      senha_hash: DataTypes.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter mais de 6 caracteres',
          },
        },
      },
    }, {
      sequelize,
      modelName: 'alunos',
    });
    this.addHook('beforeSave', async (aluno) => {
      if (aluno.password) {
        aluno.senha_hash = await bcrypt.hash(aluno.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.senha_hash);
  }

  static associate(models) {
    this.belongsTo(models.salas, { foreignKey: 'sala_id', as: 'aluno-sala' });
    this.belongsTo(models.casas, { foreignKey: 'casa_id', as: 'aluno-casa' });
    this.hasMany(models.fotoalunos, { foreignKey: 'aluno_id', as: 'aluno-foto' });
    this.hasMany(models.provas, { foreignKey: 'aluno_id', as: 'aluno-prova' });
  }
}

module.exports = Aluno;
