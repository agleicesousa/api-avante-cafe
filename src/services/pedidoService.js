const prisma = require("../config/database");

const criarPedido = async (clienteId, mesaId, itens) => {
    const total = itens.reduce((acc, item) => acc + item.quantidade * item.precoUnitario, 0);

    return await prisma.pedido.create({
        data: {
            clienteId,
            mesaId,
            total,
            itens: {
                create: itens.map(item => ({
                    menuId: item.menuId,
                    quantidade: item.quantidade,
                    precoUnitario: item.precoUnitario,
                    observacoes: item.observacoes || null
                }))
            }
        },
        include: { itens: true }
    });
};

const listarPedidos = async () => {
    return await prisma.pedido.findMany({
        include: {
            itens: true,
            cliente: true,
            mesa: true
        }
    });
};

const buscarPedidoPorId = async (id) => {
    return await prisma.pedido.findUnique({
        where: { id: parseInt(id) },
        include: { itens: true, cliente: true, mesa: true }
    });
};

const cancelarPedido = async (id) => {
    return await prisma.pedido.delete({ where: { id: parseInt(id) } });
};

module.exports = {
    criarPedido,
    listarPedidos,
    buscarPedidoPorId,
    cancelarPedido
};
