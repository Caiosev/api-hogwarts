import { Router } from 'express';
import casaController from '../controllers/CasaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', casaController.index);
router.post('/', loginRequired, casaController.store);
router.put('/:id', loginRequired, casaController.update);
router.get('/:id', casaController.show);
router.delete('/:id', loginRequired, casaController.delete);

export default router;
