const prisma = require("../config/database");

const criarPedido = async (clienteId, mesaId, itens) => {
    const total = itens.reduce((acc, item) => acc + item.quantidade * item.precoUnitario, 0);

    return await prisma.pedido.create({
        data: {
            clienteId,
            mesaId,
            total,
            itens: {
                createMany: itens.map(item => ({
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

module.exports = {
    criarPedido
};