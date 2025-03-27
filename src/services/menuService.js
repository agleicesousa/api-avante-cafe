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

//Iniciando as listagens (id)
const listarItens = async (id) => {
    try {
        const menu = await prisma.menu.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return menu;
    } catch (error) {
        throw new Error('Item não encontrado' + error.message);

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