const prisma = require('../config/database.js');

// Criar novo item no menu
const criarItemMenu = async (nome, preco, categoria, imagem = null) => {
    try {
        if (isNaN(preco) || preco <= 0) {
            throw new Error('Preço deve ser um número positivo');
        }

        const novoItem = await prisma.menu.create({
            data: {
                nome,
                preco: parseFloat(preco),
                categoria,
                imagem
            }
        });

        return novoItem;
    } catch (error) {
        console.error('Erro no serviço ao criar item:', error);
        throw new Error(`Falha ao criar item: ${error.message}`);
    }
};

// Buscar item por ID
const buscarItemPorId = async (id) => {
    try {
        if (isNaN(id)) {
            throw new Error('ID deve ser um número válido');
        }

        const item = await prisma.menu.findUnique({
            where: { id: parseInt(id) }
        });

        return item;
    } catch (error) {
        console.error('Erro no serviço ao buscar item por ID:', error);
        throw new Error(`Falha ao buscar item: ${error.message}`);
    }
};

// Buscar itens por categoria
const buscarItensPorCategoria = async (categoria) => {
    try {
        const itens = await prisma.menu.findMany({
            where: { categoria: { equals: categoria, mode: 'insensitive' } }
        });

        return itens;
    } catch (error) {
        console.error('Erro no serviço ao buscar por categoria:', error);
        throw new Error(`Falha ao buscar itens por categoria: ${error.message}`);
    }
};

// Listar todos os itens
const listarTodosItens = async () => {
    try {
        const itens = await prisma.menu.findMany({
            orderBy: { categoria: 'asc' }
        });

        return itens;
    } catch (error) {
        console.error('Erro no serviço ao listar itens:', error);
        throw new Error(`Falha ao listar itens: ${error.message}`);
    }
};

module.exports = {
    criarMenu,
    listarItens,
    buscaDeCategoria,
    listagemTotal
};