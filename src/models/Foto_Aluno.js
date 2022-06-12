import Sequelize, { Model } from 'sequelize';

export default class Foto_Aluno extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo nao pode ser vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo nao pode ser vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `https://aquiles-api.seventerprise.tech/images/alunos/${this.getDataValue('filename')}`;
        },
      },
    }, { sequelize, modelName: 'fotoalunos' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.alunos, { foreignKey: 'aluno_id', as: 'fotoaluno-aluno' });
  }
}
