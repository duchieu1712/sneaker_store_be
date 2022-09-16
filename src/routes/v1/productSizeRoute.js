const express = require('express')

const productSizeRoute = express.Router()

const productSizeController = require('../../controllers/productSizeController')

orderRoute.post("/addProductSize", productSizeController.addProductSize)
orderRoute.put("/updateProductSize", productSizeController.updateProductSize)

module.exports = productSizeRoute