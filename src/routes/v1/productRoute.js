const express = require('express')

const productRoute = express.Router()

const productController = require('../../controllers/productController')

productRoute.get("/getProducts", productController.getProducts)
productRoute.post("/createProduct",productController.addProduct)
// productRoute.get("/searchProduct",productController.searchProduct)

module.exports = productRoute

