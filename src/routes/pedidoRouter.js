const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");

router.post("/pedidos", pedidoController.criarPedido);
router.get("/pedidos", pedidoController.listarPedidos);
router.get("/pedidos/:id", pedidoController.buscarPedidoPorId);
router.delete("/pedidos/:id", pedidoController.cancelarPedido);

module.exports = router;
