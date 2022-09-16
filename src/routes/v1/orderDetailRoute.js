const express = require('express')

const orderDetailRoute = express.Router()

const orderDetailController = require('../../controllers/orderDetailController')

orderDetailRoute.get("/getOrderDetails", orderDetailController.getOrderDetails)
orderDetailRoute.post("/addOrderDetail", orderDetailController.addOrderDetail)
orderDetailRoute.put("/updateOrderDetail/:id", orderDetailController.updateOrderDetail)
orderDetailRoute.delete("/deleteOrderDetail", orderDetailController.deleteOrderDetail)
module.exports = orderDetailRoute