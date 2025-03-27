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