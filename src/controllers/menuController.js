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

// Buscar item por ID
export const buscarItemMenuPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await buscarItemPorId(parseInt(id));

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item não encontrado'
      });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Erro ao buscar item:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar item',
      error: error.message
    });
  }
};

// Buscar itens por categoria
export const buscarItensMenuPorCategoria = async (req, res) => {
  const { categoria } = req.params;

  try {
    const itens = await buscarItensPorCategoria(categoria);

    if (itens.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Nenhum item encontrado para esta categoria'
      });
    }

    res.json({
      success: true,
      data: itens,
      count: itens.length
    });
  } catch (error) {
    console.error('Erro ao buscar itens por categoria:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar itens por categoria',
      error: error.message
    });
  }
};

// Listar todos os itens do menu
export const listarTodosItensMenu = async (req, res) => {
  try {
    const itens = await listarTodosItens();

    res.json({
      success: true,
      data: itens,
      count: itens.length
    });
  } catch (error) {
    console.error('Erro ao listar itens:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar itens do menu',
      error: error.message
    });
  }
};