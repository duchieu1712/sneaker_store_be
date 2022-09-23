const express = require('express')
const authController = require('../../controllers/authController')

const deliveryRoute = express.Router()

const deliveryController = require('../../controllers/deliveryController')

deliveryRoute.get("/getDeliveries", deliveryController.getDeliveries)
deliveryRoute.post("/addDelivery", authController.verifyToken, deliveryController.addDelivery)
deliveryRoute.put("/updateDelivery/:id", authController.verifyToken, deliveryController.updateDelivery)
deliveryRoute.post("/deleteDelivery", authController.verifyToken, deliveryController.deleteDelivery)
deliveryRoute.post("/searchDeliveries", deliveryController.searchDeliveries)
module.exports = deliveryRoute