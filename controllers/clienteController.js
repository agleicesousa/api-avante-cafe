const clienteService = require("../services/clienteService");

const criarCliente = async (req, res) => {
    try {
        const { nome, mesaNumero } = req.body;

        if (mesaNumero) {
            const mesaExiste = await prisma.mesa.findUnique({
                where: { numero: parseInt(mesaNumero) },
            });
            if (!mesaExiste) {
                return res.status(400).json({ error: "Mesa não encontrada" });
            }
        }

        const cliente = await clienteService.criarCliente(nome, mesaNumero);
        res.status(201).json(cliente);
    } catch (error) {
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
            return res
                .status(404)
                .json({ error: "Nenhum cliente encontrado nesta mesa" });
        }

        res.json(cliente);
    } catch (error) {
        console.error("Erro ao buscar cliente por mesa:", error);
        res.status(500).json({ error: "Erro ao buscar cliente" });
    }
};

module.exports = {
    criarCliente,
    buscarClientePorMesa,
};