"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Materia = require('../models/Materia'); var _Materia2 = _interopRequireDefault(_Materia);

class MateriaController {
  async index(req, res) {
    const materias = await _Materia2.default.findAll();
    res.json(materias);
  }

  async store(req, res) {
    try {
      const materia = await _Materia2.default.create(req.body);
      return res.json(materia);
    } catch (e) {
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

      const materia = await _Materia2.default.findByPk(id);

      if (!materia) {
        return res.status(400).json({
          errors: ['Materia nao existe'],
        });
      }

      return res.json(materia);
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

      const materia = await _Materia2.default.findByPk(id);
      if (!materia) {
        return res.status(400).json({
          errors: ['Materia nao existe'],
        });
      }

      const materiaAtualizado = await materia.update(req.body);

      return res.json(materiaAtualizado);
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

      const materia = await _Materia2.default.findByPk(id);

      if (!materia) {
        return res.status(400).json({
          errors: ['Materia nao existe'],
        });
      }

      await materia.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new MateriaController();
