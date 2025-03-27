import express from 'express';
import {
  adicionarItemMenu,
  buscarItemMenuPorId,
  buscarItensMenuPorCategoria,
  listarTodosItensMenu
} from '../controllers/menuController.js';

const router = express.Router();

// Rotas para o menu
router.post('/itens', adicionarItemMenu);
router.get('/itens', listarTodosItensMenu);
router.get('/itens/:id', buscarItemMenuPorId);
router.get('/itens/categoria/:categoria', buscarItensMenuPorCategoria);

export default router;