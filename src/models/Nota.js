import Sequelize, { Model } from 'sequelize';

export default class Nota extends Model {
  static init(sequelize) {
    super.init({
      valor: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Nota precisa ser um numero inteiro',
          },
        },
      },
    }, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    this.hasMany(models.Prof, { foreignKey: 'prof_id' });
    this.hasMany(models.Materia, { foreignKey: 'materia_id' });
    this.hasMany(models.Casa, { foreignKey: 'casa_id' });
  }
}
