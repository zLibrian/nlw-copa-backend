import express from 'express';
import usersController from '../controllers/usersController';

const userRouter = express.Router();

userRouter.get('/count', usersController.list)

export default userRouter;