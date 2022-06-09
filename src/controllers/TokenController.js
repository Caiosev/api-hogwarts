import jwt from 'jsonwebtoken';
import Prof from '../models/Prof';

class TokenController {
  async store(req, res) {
    const { login = '', senha = '' } = req.body;
    if (!login || !senha) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    const prof = await Prof.findOne({ where: { login } });

    if (!prof) {
      return res.status(401).json({
        errors: ['Prof nao existe'],
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
