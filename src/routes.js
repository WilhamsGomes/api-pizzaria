const { Router } = require("express");

const ProductController = require("./app/controllers/Product/ProductController")

const router = Router();

router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.post("/products", ProductController.store);
router.delete("/products/:id", ProductController.delete);
router.put("/products/:id", ProductController.update);


module.exports = router; 