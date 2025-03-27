const prisma = require("../config/database");

const criarCliente = async (nome, mesaNumero) => {
    return await prisma.cliente.create({
        data: {
            nome,
            mesaNumero: mesaNumero ? parseInt(mesaNumero) : null,
        },
        include: {
            mesa: true,
        },
    });
};

const buscarClientePorMesa = async (mesaNumero) => {
    return await prisma.cliente.findFirst({
        where: {
            mesaNumero: parseInt(mesaNumero),
        },
        include: {
            pedidos: true,
            mesa: true,
        },
    });
};

module.exports = {
    criarCliente,
    buscarClientePorMesa
};