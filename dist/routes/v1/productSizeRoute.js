const express = require('express')

const productSizeRoute = express.Router()

const productSizeController = require('../../controllers/productSizeController')

productSizeRoute.get("/getProductSizeList", productSizeController.getProductSizeList)
productSizeRoute.post("/addProductSize", productSizeController.addProductSize)
productSizeRoute.put("/updateProductSize", productSizeController.updateProductSize)

module.exports = productSizeRoute