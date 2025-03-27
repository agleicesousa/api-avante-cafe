const prisma = require("../config/database");

const criarContato = async (nome, email, mensagem) => {
    return await prisma.contato.create({
        data: {
            nome,
            email,
            mensagem
        }
    });
};
const listarContatos = async () => {
    return await prisma.contato.findMany({
        orderBy: {
            dataMensagem: 'desc'
        }
    });
};