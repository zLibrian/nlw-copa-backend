import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import guessRouter from './router/guessRouter';
import poolRouter from './router/poolRouter';
import userRouter from './router/usersRouter';

const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3333;

app.use('/pools', poolRouter)
app.use('/users', userRouter)
app.use('/guesses', guessRouter)

app.use(errorHandler)
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
export default app;