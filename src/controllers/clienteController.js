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

const buscarClientePorMesa = async (req, res) => {
    try {
        const { mesaId } = req.params;

        if (!mesaId) {
            return res.status(400).json({ error: "ID da mesa é obrigatório" });
        }

        const cliente = await clienteService.buscarClientePorMesa(mesaId);

        if (!cliente) {
            return res.status(404).json({ error: "Nenhum cliente encontrado nesta mesa" });
        }

        res.json(cliente);
    } catch (error) {
        console.error("Erro ao buscar cliente por mesa:", error);
        res.status(500).json({ error: "Erro ao buscar cliente" });
    }
};

module.exports = {
    criarCliente,
    buscarClientePorMesa
};