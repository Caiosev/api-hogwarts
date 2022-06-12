import Prof from '../models/Prof';
import Materia from '../models/Materia';

class ProfController {
  async store(req, res) {
    try {
      console.log(req.body);
      const novoProf = await Prof.create(req.body);
      const { id, nome, login } = novoProf;
      return res.json({ id, nome, login });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const prof = await Prof.findAll({ include: [{ model: Materia, as: 'materia_id' }] });
      return res.json(prof);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const prof = await Prof.findByPk(id);
      const { nome, login } = prof;
      return res.json({ id, nome, login });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const prof = await Prof.findByPk(req.userId);
      if (!prof) {
        return res.status(400).json({
          errors: ['Prof nao existe'],
        });
      }
      const novoProf = await prof.update(req.body);
      const { id, nome, login } = novoProf;
      return res.json({ id, nome, login });
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const prof = await Prof.findByPk(req.userId);
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
export default new ProfController();
