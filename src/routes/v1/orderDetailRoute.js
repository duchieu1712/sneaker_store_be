const express = require('express')

const orderDetailRoute = express.Router()

const orderDetailController = require('../../controllers/orderDetailController')

orderDetailRoute.get("/getOrderDetail", orderDetailController.getOrderDetail)
orderDetailRoute.post("/addOrderDetail", orderDetailController.addOrderDetail)
orderDetailRoute.put("/updateOrderDetail", orderDetailController.updateOrderDetail)
orderDetailRoute.delete("/deleteOrderDetail", orderDetailController.deleteOrderDetail)
module.exports = orderDetailRoute