import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import poolRouter from './router/poolRouter';

const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3333;

app.use('/pools', poolRouter)

app.use(errorHandler)
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
export default app;