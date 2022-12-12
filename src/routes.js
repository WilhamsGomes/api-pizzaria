const { Router } = require("express");

const ProductController = require("./app/controllers/Product/ProductController");
const OrderController = require("./app/controllers/Order/OrderController");

const router = Router();

router.get("/products", ProductController.index); //BUSCAR TODOS
router.get("/products/:id", ProductController.show);//BUSCAR POR ID
router.post("/products", ProductController.store); //CRIAR NOVO
router.put("/products/:id", ProductController.update); //EDITAR
router.delete("/products/:id", ProductController.delete); //APAGAR

router.get("/orders", OrderController.index);
router.get("/orders/:id", OrderController.show);
router.post("/orders", OrderController.store);
router.put("/orders/:id", OrderController.update);
router.delete("/orders/:id", OrderController.delete);

module.exports = router; 