const prisma = require('../config/database');

const criarCliente = async (nome, mesaId) => {
    return await prisma.cliente.create({
        data: {
            nome,
            mesaId: mesaId ? parseInt(mesaId) : null
        },
        include: {
            mesa: true
        }
    });
};

module.exports = {
    criarCliente
}