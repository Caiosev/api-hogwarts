import Prova from '../models/Prova';
import Aluno from '../models/Aluno';
import Prof from '../models/Prof';

class ProvaController {
  async index(req, res) {
    const provas = await Prova.findAll({
      include:
     [
       {
         association: 'prova-aluno',
         model: Aluno,
         include: [{ association: 'aluno-casa' }],
       },
       {
         association: 'prova-prof',
         model: Prof,
         include: [{ association: 'prof-materia' }],
       },
     ],
    });
    res.json(provas);
  }

  async store(req, res) {
    try {
      const prova = await Prova.create(req.body);
      return res.json(prova);
    } catch (e) {
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

      const prova = await Prova.findAll({ where: { aluno_id } });

      if (prova.length === 0) {
        return res.json({ error: 'Aluno nao realizou nenhuma prova' });
      }

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

      const prova = await Prova.findByPk(id);
      if (!prova) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }

      const casaAtualizado = await Prova.update(req.body);

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

      const prova = await Prova.findByPk(id);

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
export default new ProvaController();
