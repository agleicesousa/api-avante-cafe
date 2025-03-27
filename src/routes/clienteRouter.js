const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.post("/clientes", clienteController.criarCliente);
router.get("/clientes/mesa/:mesaId", clienteController.buscarClientePorMesa);

module.exports = router;