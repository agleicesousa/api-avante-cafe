const express = require("express");
const router = express.Router();
const contatoController = require("../controllers/contatoController");

router.post("/contatos", contatoController.criarContato);
router.get("/contatos/:id", contatoController.buscarContatoPorId);


module.exports = router;
