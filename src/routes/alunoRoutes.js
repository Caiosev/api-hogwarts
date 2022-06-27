import { Router } from 'express';
import cors from '../middlewares/cors';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', cors, alunoController.index);
router.post('/', cors, loginRequired, alunoController.store);
router.put('/:id', cors, loginRequired, alunoController.update);
router.get('/:id', cors, alunoController.show);
router.delete('/:id', cors, loginRequired, alunoController.delete);

export default router;
