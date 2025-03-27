const prisma = require('../config/database.js');
//Criando espaço de inserção dos itens
const criarMenu = async (item, preco, imagem) => {
 try {
    const menu = await prisma.menu.create({
        data: {
        item,
        preco,
        categoria,
        imagem
        }
    });
    return menu;
}  catch(error){
  throw new Error ('Erro ao inserir item' + error.message);  
}
};

//Iniciando as listagens (id)
const listarItens = async (id) => {
 try {
    const menu = await prisma.menu.findUnique({
        where: {
            id: parseInt (id)
        }
    });
    return menu;
 }catch (error) {
    throw new Error ('Item não encontrado' + error.message);

 }
};

const buscaDeCategoria = async (categoria) => {
    try {
        const produtos = await prisma.menu.findMany({
            where:{
                categoria
            }
        });
        return produtos;

    }catch(error) {
        throw new Error ('Erro ao encontrar categorias' + error.message);

    }
};

const listagemTotal = async () => {
    try{
        const lista = await prisma.menu.findMany();

        return lista;
    }catch(error) {
        throw new Error ('Erro ao apresentar listagem completa' + error.message);
    }
}






module.exports = {
    criarMenu,
    listarItens,
    buscaDeCategoria,
    listagemTotal
};
