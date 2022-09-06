const express = require("express");

const productRoute = express.Router();
const upload = require("../../config/upload");
const productController = require("../../controllers/productController");

productRoute.get("/getProducts", productController.getProducts);
productRoute.post("/addProduct", upload.array("images"), productController.addProduct);
productRoute.get("/filterProduct", productController.filterProducts);

module.exports = productRoute;
