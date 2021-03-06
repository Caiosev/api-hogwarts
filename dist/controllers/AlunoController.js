"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll(
      {
        include:
       [{ association: 'aluno-sala' },
         { association: 'aluno-casa' },
         { association: 'aluno-foto' }],
      },
    );
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const validateLogin = await _Aluno2.default.findAll({ where: { login: req.body.login } });
      if (validateLogin.length > 0) {
        return res.status(400).json({
          errors: ['Login ja cadastrado'],
        });
      }
      const aluno = await _Aluno2.default.create(req.body);
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        include:
       [{ association: 'aluno-sala' },
         { association: 'aluno-casa' },
         { association: 'aluno-foto' }],
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      const alunoAtulizado = await aluno.update(req.body);

      return res.json(alunoAtulizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }

      await aluno.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new AlunoController();
