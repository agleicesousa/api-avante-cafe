const contatoService = require("../services/contatoService");

const criarContato = async (req, res) => {
    try {
        const { nome, email, mensagem } = req.body;

        // Validações básicas
        if (!nome || !email || !mensagem) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        const contato = await contatoService.criarContato(nome, email, mensagem);
        res.status(201).json(contato);

    } catch (error) {
        console.error("Erro ao criar contato:", error);
        res.status(500).json({ error: "Erro interno ao processar mensagem" });
    }
};

const listarContatos = async (req, res) => {
    try {
        const contatos = await contatoService.listarContatos();
        res.json(contatos);
    } catch (error) {
        console.error("Erro ao listar contatos:", error);
        res.status(500).json({ error: "Erro interno ao listar mensagens" });
    }
};

const buscarContatoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const contato = await contatoService.buscarContatoPorId(id);

        if (!contato) {
            return res.status(404).json({ error: "Mensagem não encontrada" });
        }

        res.json(contato);
    } catch (error) {
        console.error("Erro ao buscar contato:", error);
        res.status(500).json({ error: "Erro interno ao buscar mensagem" });
    }
};

const deletarContato = async (req, res) => {
    try {
        const { id } = req.params;
        await contatoService.deletarContato(id);
        res.status(204).end();
    } catch (error) {
        console.error("Erro ao deletar contato:", error);
        res.status(500).json({ error: "Erro interno ao deletar mensagem" });
    }
};

module.exports = {
    criarContato,
    listarContatos,
    buscarContatoPorId,
    deletarContato
};