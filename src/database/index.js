import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Prof from '../models/Prof';
import Casa from '../models/Casa';
import Foto_Aluno from '../models/Foto_Aluno';
import Foto_Prof from '../models/Foto_Prof';
import Materia from '../models/Materia';
// import Nota from '../models/Nota';
import Sala from '../models/Sala';

const models = [Sala, Casa, Materia, Prof, Aluno, Foto_Aluno, Foto_Prof];

const connection = new Sequelize(dataBaseConfig);

models.forEach((element) => element.init(connection));
models.forEach((element) => element.associate && element.associate(connection.models));
