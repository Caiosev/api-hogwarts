"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Casa = require('../models/Casa'); var _Casa2 = _interopRequireDefault(_Casa);

class CasaController {
  async index(req, res) {
    const casas = await _Casa2.default.findAll();
    res.json(casas);
  }

  async store(req, res) {
    try {
      const casa = await _Casa2.default.create(req.body);
      return res.json(casa);
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

      const casa = await _Casa2.default.findByPk(id);

      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      return res.json(casa);
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

      const casa = await _Casa2.default.findByPk(id);
      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      const casaAtualizado = await _Casa2.default.update(req.body);

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

      const casa = await _Casa2.default.findByPk(id);

      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      await casa.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
exports. default = new CasaController();
