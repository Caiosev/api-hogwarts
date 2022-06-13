import { Router } from 'express';
import provaController from '../controllers/ProvaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', provaController.index);
router.post('/', loginRequired, provaController.store);
router.put('/:id', loginRequired, provaController.update);
router.get('/:id', provaController.show);
router.delete('/:id', loginRequired, provaController.delete);
export default router;
