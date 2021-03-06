"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-return-await */
var _Prova = require('../models/Prova'); var _Prova2 = _interopRequireDefault(_Prova);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);
var _Casa = require('../models/Casa'); var _Casa2 = _interopRequireDefault(_Casa);

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
      const nota = prova.dataValues.valor;
      const id = prova.dataValues.aluno_id;
      const aluno = await _Aluno2.default.findByPk(id);
      const { casa_id } = aluno.dataValues;
      const casa = await _Casa2.default.findByPk(casa_id);
      const { nota_total } = casa.dataValues;
      const notafinal = Number(nota_total) + Number(nota);
      casa.nota_total = notafinal;
      await _Casa2.default.update(casa.dataValues, { where: { id: casa_id } });
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

      const prova = await _Prova2.default.findAll({
        where: { aluno_id },
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
      const { aluno_id } = req.params;
      if (!aluno_id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const provas = await _Prova2.default.findAll({
        where: { aluno_id },
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

      if (!provas) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }
      const valores = provas.map((prova) => prova.valor).reduce((prev, curr) => prev + curr, 0);

      const nota = valores;
      const aluno = await _Aluno2.default.findByPk(aluno_id);
      const { casa_id } = aluno.dataValues;
      const casa = await _Casa2.default.findByPk(casa_id);
      const { nota_total } = casa.dataValues;
      const notafinal = Number(nota_total) - Number(nota);
      casa.nota_total = notafinal;
      await _Casa2.default.update(casa.dataValues, { where: { id: casa_id } });
      provas.forEach(async (prova) => await prova.destroy());
      return res.json({ Deletado: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new ProvaController();
