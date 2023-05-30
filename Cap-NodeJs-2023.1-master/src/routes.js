const express = require("express")
const router = express.Router()
const listaController = require('./controllers/listaController');

router.post('/lista', listaController.addItem);
router.delete('/lista/:id', listaController.removeItem);
router.pacth('/lista/:id', listaController.updateItem);
router.get('/lista', listaController.getAllItems);
router.get('/lista/:id', listaController.getItem);


module.exports = router;

