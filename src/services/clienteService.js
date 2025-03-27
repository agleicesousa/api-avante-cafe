const prisma = require("../config/database");

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

const buscarClientePorMesa = async (mesaId) => {
    return await prisma.cliente.findFirst({
        where: {
            mesaId: parseInt(mesaId)
        },
        include: {
            pedidos: {
                include: {
                    itens: {
                        include: {
                            menu: true
                        }
                    }
                }
            }
        }
    });
};

module.exports = {
    criarCliente,
    buscarClientePorMesa
};