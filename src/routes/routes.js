const routes = require('express').Router();
const itemController = require('../controllers/itemController');

routes.get("/",itemController.principal);
routes.get("/meus-itens", itemController.getAll);
routes.get("/adicionar", itemController.adicionar);
routes.post("/create",itemController.create);
routes.get("/getById/:id/:method", itemController.getById);
routes.post("/update/:id", itemController.update);
routes.get("/remove/:id", itemController.remove);

module.exports = routes;