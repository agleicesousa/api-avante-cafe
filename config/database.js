import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

// Função para conectar ao banco de dados
export async function connectDB() {
    try {
        await prisma.$connect();
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
}

// Middleware para injetar o Prisma no request
export function prismaMiddleware(req, res, next) {
    req.prisma = prisma;
    next();
}

export default prisma;