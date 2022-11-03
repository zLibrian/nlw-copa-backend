import express from 'express';
import poolsController from '../controllers/poolsController';

const poolRouter = express.Router();

poolRouter.get('/count', poolsController.list)

poolRouter.post('/', poolsController.create)

export default poolRouter;