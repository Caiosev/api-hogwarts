"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Prof extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Nome deve ter mais de 3 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Sobrenome deve ter mais de 3 caracteres',
          },
        },
      },
      login: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Login deve ter mais de 3 caracteres',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      senha: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter mais de 6 caracteres',
          },
        },
      },
    }, { sequelize });
    this.addHook('beforeSave', async (prof) => {
      if (!prof.senha) return;
      prof.password_hash = await _bcryptjs2.default.hash(prof.senha, 8);
    });
    return this;
  }

  passwordIsValid(senha) {
    return _bcryptjs2.default.compare(senha, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Foto_Prof, { foreignKey: 'foto_prof_id' });
    this.hasMany(models.Materia, { foreignKey: 'materias_id' });
  }
} exports.default = Prof;
