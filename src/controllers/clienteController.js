const clienteService = require("../services/clienteService");

const criarCliente = async (req, res) => {
    try {
        const { nome, mesaId } = req.body;

        if (!nome) {
            return res.status(400).json({ error: "Nome do cliente é obrigatório" });
        }

        const cliente = await clienteService.criarCliente(nome, mesaId);
        res.status(201).json(cliente);
    } catch (error) {
        console.error("Erro ao criar cliente:", error);
        res.status(500).json({ error: "Erro ao criar cliente" });
    }
};


module.exports = {
    criarCliente,
};