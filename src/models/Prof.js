const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');

class Prof extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
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
      modelName: 'profs',
    });
    this.addHook('beforeSave', async (prof) => {
      if (prof.password) {
        prof.senha_hash = await bcrypt.hash(prof.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.senha_hash);
  }

  static associate(models) {
    this.belongsTo(models.materias, { foreignKey: 'materia_id', as: 'prof-materia' });
    this.hasMany(models.fotoprofs, { foreignKey: 'prof_id', as: 'prof-fotoprof' });
    this.hasMany(models.provas, { foreignKey: 'prof_id', as: 'prof-prova' });
  }
}

module.exports = Prof;
