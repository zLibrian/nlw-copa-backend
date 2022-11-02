import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query']
})

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3333;

app.get('/pools/count', async (req, res) => {
  const count = await prisma.pool.count()
  return res.status(200).json({ count })
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));

export default app;