import express from 'express';
import { 
  criarMenu, 
  listarItens, 
  buscaDeCategoria, 
  listagemTotal
} from '../controllers/menuController.js';

const router = express.Router();

router.post('/menu', criarMenu);

router.get('/menu/:id', listarItens);

router.get('/menu/categoria/:categoria', buscaDeCategoria);

router.get('/menu', listagemTotal);

export default router;
