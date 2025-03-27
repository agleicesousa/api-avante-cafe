const express = require("express");
const router = express.Router();
const contatoController = require("../controllers/contatoController");

router.post("/contatos", contatoController.criarContato);

module.exports = router;
