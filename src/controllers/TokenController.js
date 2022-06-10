import jwt from 'jsonwebtoken';
import Sequelize, { QueryTypes } from 'sequelize';
import Profs from '../models/Prof';
import dataBaseConfig from '../config/database';

const connection = new Sequelize(dataBaseConfig);

class TokenController {
  async store(req, res) {
    const { login = '', senha = '' } = req.body;
    if (!login || !senha) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    try {
      const prof = await Profs.findOne({ where: { login } });
      // const prof = await connection.query('SELECT * FROM Profs WHERE Profs.login = ? LIMIT 1', { replacements: [login], type: QueryTypes.SELECT });
      console.log(prof);
    } catch (error) {
      console.log(error);
    }
    if (!prof) {
      return res.status(401).json({
        errors: ['Profs nao existe'],
      });
    }

    if (!(await prof.passwordIsValid(senha))) {
      return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }

    const { id } = prof;
    const token = jwt.sign({ id, login }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { nome: prof.nome, login } });
  }
}
export default new TokenController();
