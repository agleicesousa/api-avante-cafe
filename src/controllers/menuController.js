import {
  criarItemMenu,
  buscarItemPorId,
  buscarItensPorCategoria,
  listarTodosItens
} from '../services/menuService.js';

// Adição de novo item ao menu
export const adicionarItemMenu = async (req, res) => {
  const { nome, preco, categoria, imagem } = req.body;

  // Validação básica dos dados de entrada
  if (!nome || !preco || !categoria) {
    return res.status(400).json({
      message: 'Nome, preço e categoria são obrigatórios'
    });
  }

  try {
    const novoItem = await criarItemMenu(nome, preco, categoria, imagem);
    res.status(201).json({
      success: true,
      data: novoItem,
      message: 'Item criado com sucesso'
    });
  } catch (error) {
    console.error('Erro ao criar item:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao criar item no menu',
      error: error.message
    });
  }
};

export const getMenuItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await listarItens(parseInt(id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar item', error: error.message });
  }
};



//Buscar por categoria
export const getMenuItemsByCategory = async (req, res) => {
  const { categoria } = req.params;
  try {
    const produtos = await buscaDeCategoria(categoria);
    if (produtos.length > 0) {
      res.json(produtos);
    } else {
      res.status(404).json({ message: 'Nenhum produto encontrado para esta categoria' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
};


//Listagem completa
export const getAllMenuItems = async (req, res) => {
  try {
    const lista = await listagemTotal();
    if (lista.length > 0) {
      res.json(lista);
    } else {
      res.status(404).json({ message: 'Nenhum item encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar itens', error: error.message });
  }
};