import { Router } from 'express';
import TokenController from '../controllers/TokenController';
import cors from '../middlewares/cors';

const router = new Router();

router.post('/', cors, TokenController.store);

export default router;
