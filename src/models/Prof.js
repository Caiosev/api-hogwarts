import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Prof extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Nome deve ter mais de 3 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Sobrenome deve ter mais de 3 caracteres',
          },
        },
      },
      login: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Login deve ter mais de 3 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      senha: {
        type: Sequelize.VIRTUAL,
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
      prof.password_hash = await bcryptjs.hash(prof.senha, 8);
    });
    return this;
  }

  passwordIsValid(senha) {
    return bcryptjs.compare(senha, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Foto_Prof, { foreignKey: 'foto_prof_id' });
    this.hasMany(models.Materia, { foreignKey: 'materias_id' });
  }
}
