import jwt from 'jsonwebtoken';
import Prof from '../models/Prof';

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
    const user = await Prof.findOne({
      where: {
        id, login,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Prof Invalido'],
      });
    }
    console.log(user);
    req.profId = id;
    req.profLogin = login;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido'],
    });
  }
};
