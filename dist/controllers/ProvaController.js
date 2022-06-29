"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Prova = require('../models/Prova'); var _Prova2 = _interopRequireDefault(_Prova);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);

class ProvaController {
  async index(req, res) {
    const provas = await _Prova2.default.findAll({
      include:
     [
       {
         association: 'prova-aluno',
         model: _Aluno2.default,
         include: [{ association: 'aluno-casa' }],
       },
       {
         association: 'prova-prof',
         model: _Prof2.default,
         include: [{ association: 'prof-materia' }],
       },
     ],
    });
    res.json(provas);
  }

  async store(req, res) {
    try {
      const prova = await _Prova2.default.create(req.body);
      return res.json(prova);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { aluno_id } = req.params;
      if (!aluno_id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const prova = await _Prova2.default.findAll({ where: { aluno_id } });

      return res.json(prova);
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

      const prova = await _Prova2.default.findByPk(id);
      if (!prova) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }

      const casaAtualizado = await _Prova2.default.update(req.body);

      return res.json(casaAtualizado);
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

      const prova = await _Prova2.default.findByPk(id);

      if (!prova) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }

      await prova.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new ProvaController();
