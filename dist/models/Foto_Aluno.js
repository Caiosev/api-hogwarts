"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Foto_Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo nao pode ser vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo nao pode ser vazio',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `https://hogwarts-api.seventerprise.tech/images/${this.getDataValue('filename')}`;
        },
      },
    }, { sequelize, modelName: 'fotoalunos' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.alunos, { foreignKey: 'aluno_id', as: 'fotoaluno-aluno' });
  }
} exports.default = Foto_Aluno;
