const express = require("express");

const productRoute = express.Router();
const upload = require("../../config/upload");
const productController = require("../../controllers/productController");

productRoute.get("/getProducts", productController.getProducts);
productRoute.get("/getProductById/:id", productController.getProductById);
productRoute.post("/addProduct", upload.array("images"), productController.addProduct);
productRoute.put("/updateProduct/:id", upload.array("images"), productController.updateProduct);
productRoute.post("/deleteProduct", productController.deleteProduct);

module.exports = productRoute;
