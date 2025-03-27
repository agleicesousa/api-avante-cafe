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

const buscaDeCategoria = async (categoria) => {
    try {
        const produtos = await prisma.menu.findMany({
            where: {
                categoria
            }
        });
        return produtos;

    } catch (error) {
        throw new Error('Erro ao encontrar categorias' + error.message);

    }
};

const listagemTotal = async () => {
    try {
        const lista = await prisma.menu.findMany();

        return lista;
    } catch (error) {
        throw new Error('Erro ao apresentar listagem completa' + error.message);
    }
}

module.exports = {
    criarMenu,
    listarItens,
    buscaDeCategoria,
    listagemTotal
};