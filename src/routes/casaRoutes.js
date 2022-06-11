import { Router } from 'express';
import casaController from '../controllers/CasaController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', casaController.index);
router.post('/', casaController.store);
router.put('/:id', casaController.update);
router.get('/:id', casaController.show);
router.delete('/:id', casaController.delete);

export default router;
