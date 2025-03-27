import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB, prismaMiddleware } from './config/database.js';

import pedidoRouter from './routes/pedidoRouter.js';
import clienteRouter from './routes/clienteRouter.js';
import menuRouter from './routes/menuRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

// Middlewares globais
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(prismaMiddleware);

// Rotas
app.use('/api', pedidoRouter);
app.use('/api', clienteRouter);
app.use('/api', menuRouter);

// Rota de verificação de saúde
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
