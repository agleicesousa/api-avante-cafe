const pedidoService = require("../services/pedidoService");

const criarPedido = async (req, res) => {
    try {
        const { clienteId, mesaId, itens } = req.body;
        const pedido = await pedidoService.criarPedido(clienteId, mesaId, itens);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido" });
    }
};

const listarPedidos = async (req, res) => {
    try {
        const pedidos = await pedidoService.listarPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
};

module.exports = {
    criarPedido,
    listarPedidos
};
