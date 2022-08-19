const express = require('express')

const orderRoute = express.Router()

const orderController = require('../../controllers/orderController')

orderRoute.get("/getOrders", orderController.getOrders)
orderRoute.post("/addOrder", orderController.addOrder)
orderRoute.put("/updateOrder/:id", orderController.updateOrder)
orderRoute.delete("/deleteOrder", orderController.deleteOrder)
module.exports = orderRoute