import jwt from 'jsonwebtoken';
import Profs from '../models/Prof';
import Alunos from '../models/Aluno';

class TokenController {
  async store(req, res) {
    const { login = '', senha = '' } = req.body;
    if (!login || !senha) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const prof = await Profs.findOne({ where: { login } });
    const aluno = await Alunos.findOne({ where: { login } });
    if (prof) {
      if (!(await prof.passwordIsValid(senha))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }
      const { id } = prof;
      const token = jwt.sign({ id, login }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({
        token,
        user: {
          id: prof.id, nome: prof.nome, sobrenome: prof.sobrenome, materia_id: prof.materia_id,
        },
      });
    } if (aluno) {
      if (!(await aluno.passwordIsValid(senha))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }
      const { id } = aluno;
      const token = jwt.sign({ id, login }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({
        token,
        user: {
          id: aluno.id,
          nome: aluno.nome,
          sobrenome: aluno.sobrenome,
          idade: aluno.idade,
          sangue:
          aluno.sangue_status,
          varinha: aluno.varinha,
          patrono: aluno.patrono,
          sala: aluno.sala_id,
          casa: aluno.casa_id,
          login: aluno.login,
        },
      });
    }
    return res.status(401).json({
      errors: ['Profs nao existe'],
    });
  }
}
export default new TokenController();
