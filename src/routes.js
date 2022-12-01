const { Router } = require("express");

const ProductController = require("./app/controllers/Product/ProductController")

const router = Router();

router.get("/products", ProductController.index);


module.exports = router; 