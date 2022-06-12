import { Router } from 'express';
import salaController from '../controllers/SalaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', salaController.index);
router.post('/', loginRequired, salaController.store);
router.put('/:id', loginRequired, salaController.update);
router.get('/:id', salaController.show);
router.delete('/:id', loginRequired, salaController.delete);

export default router;
