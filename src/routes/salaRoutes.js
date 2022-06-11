import { Router } from 'express';
import salaController from '../controllers/SalaController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', salaController.index);
router.post('/', salaController.store);
router.put('/:id', salaController.update);
router.get('/:id', salaController.show);
router.delete('/:id', salaController.delete);

export default router;
