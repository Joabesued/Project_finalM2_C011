const routes = require('express').Router();
const itemController = require('../controllers/itemController');

routes.get("/",itemController.principal);
routes.get("/meus-itens", itemController.getAll);
routes.get("/adicionar", itemController.adicionar);
routes.post("/create",itemController.create);

module.exports = routes;