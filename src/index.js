import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pedidoRouter from './routes/pedidoRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.use('/api', pedidoRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
