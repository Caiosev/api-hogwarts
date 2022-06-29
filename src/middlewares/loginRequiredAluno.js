import jwt from 'jsonwebtoken';
import Aluno from '../models/Aluno';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, login } = data;
    const user = await Aluno.findOne({
      where: {
        id, login,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Aluno Invalido'],
      });
    }
    req.AlunoId = id;
    req.AlunoLogin = login;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido'],
    });
  }
};
