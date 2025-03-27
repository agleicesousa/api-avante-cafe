const pedidoService = require("../services/pedidoService");

const criarPedido = async (req, res) => {
    try {
        const { clienteId, mesaId, itens } = req.body;
        const pedido = await pedidoService.criarPedido(clienteId, mesaId, itens);
        res.status(201).json({ message: "Pedido criado com sucesso", pedido });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido. Tente novamente mais tarde." });
    }
};

const listarPedidos = async (req, res) => {
    try {
        const pedidos = await pedidoService.listarPedidos();
        res.json({ message: "Pedidos listados com sucesso", pedidos });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos. Tente novamente mais tarde." });
    }
};

const buscarPedidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await pedidoService.buscarPedidoPorId(id);
        if (!pedido)
            return res.status(404).json({ error: "Pedido não encontrado. Verifique o código do pedido." });
        res.json({ message: "Pedido encontrado com sucesso", pedido });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedido. Tente novamente mais tarde." });
    }
};

const cancelarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        await pedidoService.cancelarPedido(id);
        res.status(200).json({ message: "Pedido cancelado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cancelar pedido. Tente novamente mais tarde." });
    }
};

module.exports = {
    criarPedido,
    listarPedidos,
    buscarPedidoPorId,
    cancelarPedido,
};
