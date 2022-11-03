import express from 'express';
import guessesController from '../controllers/guessesController';

const guessRouter = express.Router();

guessRouter.get('/count', guessesController.list)

export default guessRouter;