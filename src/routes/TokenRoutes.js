import { Router } from 'express';
import cors from 'cors';
import TokenController from '../controllers/TokenController';

const router = new Router();

router.options('*', cors());
router.post('/', cors(), TokenController.store);

export default router;
