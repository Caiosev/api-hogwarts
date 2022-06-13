"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Sala = require('../models/Sala'); var _Sala2 = _interopRequireDefault(_Sala);

class SalaController {
  async index(req, res) {
    const salas = await _Sala2.default.findAll();
    res.json(salas);
  }

  async store(req, res) {
    try {
      const sala = await _Sala2.default.create(req.body);
      return res.json(sala);
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

      const sala = await _Sala2.default.findByPk(id);

      if (!sala) {
        return res.status(400).json({
          errors: ['Sala nao existe'],
        });
      }

      return res.json(sala);
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

      const sala = await _Sala2.default.findByPk(id);
      if (!sala) {
        return res.status(400).json({
          errors: ['Sala nao existe'],
        });
      }

      await _Sala2.default.update(req.body, { where: { id } });

      return res.json({ sucesso: true });
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

      const sala = await _Sala2.default.findByPk(id);

      if (!sala) {
        return res.status(400).json({
          errors: ['Sala nao existe'],
        });
      }

      await sala.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new SalaController();
