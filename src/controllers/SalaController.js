import Sala from '../models/Sala';

class SalaController {
  async index(req, res) {
    const salas = await Sala.findAll();
    res.json(salas);
  }

  async store(req, res) {
    try {
      const sala = await Sala.create(req.body);
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

      const sala = await Sala.findByPk(id);

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

      const sala = await Sala.findByPk(id);
      if (!sala) {
        return res.status(400).json({
          errors: ['Sala nao existe'],
        });
      }

      const casaAtualizado = await Sala.update(req.body);

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

      const sala = await Sala.findByPk(id);

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
export default new SalaController();
