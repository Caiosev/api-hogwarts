import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';
import corsMiddleware from '../middlewares/cors';

const router = new Router();

router.get('/', corsMiddleware, loginRequired, alunoController.index);
router.post('/', corsMiddleware, loginRequired, alunoController.store);
router.put('/:id', corsMiddleware, loginRequired, alunoController.update);
router.get('/:id', corsMiddleware, alunoController.show);
router.delete('/:id', corsMiddleware, loginRequired, alunoController.delete);

export default router;
