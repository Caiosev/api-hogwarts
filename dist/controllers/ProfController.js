"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);

class ProfController {
  async store(req, res) {
    try {
      const novoProf = await _Prof2.default.create(req.body);
      const { id, nome, login } = novoProf;
      return res.json({ id, nome, login });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const prof = await _Prof2.default.findAll(
        {
          include:
         [{ association: 'prof-materia' },
           { association: 'prof-fotoprof' }],
        },
      );
      return res.json(prof);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const prof = await _Prof2.default.findByPk(id, {
        include:
       [{ association: 'prof-materia' },
         { association: 'prof-fotoprof' }],
      });
      const { nome, sobrenome, login } = prof;
      return res.json({
        nome,
        sobrenome,
        login,
        prof_materia: prof['prof-materia'],
        prof_foto: prof['prof-fotoprof'],
      });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const prof = await _Prof2.default.findByPk(id);
      if (!prof) {
        return res.status(400).json({
          errors: ['Prof nao existe'],
        });
      }
      const novoProf = await prof.update(req.body);
      const {
        nome, sobrenome, materia_id, login,
      } = novoProf;
      return res.json({
        nome, sobrenome, materia_id, login,
      });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const prof = await _Prof2.default.findByPk(req.userId);
      if (!prof) {
        return res.status(400).json({
          errors: ['Prof nao existe'],
        });
      }
      await prof.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.json(null);
    }
  }
}
exports. default = new ProfController();
