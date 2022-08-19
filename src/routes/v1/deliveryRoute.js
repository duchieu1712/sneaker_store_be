const express = require('express')

const deliveryRoute = express.Router()

const deliveryController = require('../../controllers/deliveryController')

deliveryRoute.get("/getDeliveries", deliveryController.getDeliveries)
deliveryRoute.post("/addDelivery", deliveryController.addDelivery)
deliveryRoute.put("/updateDelivery/:id", deliveryController.updateDelivery)
deliveryRoute.delete("/deleteDelivery", deliveryController.deleteDelivery)
module.exports = deliveryRoute