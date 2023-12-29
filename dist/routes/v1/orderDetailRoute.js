const express = require('express')

const orderDetailRoute = express.Router()

const orderDetailController = require('../../controllers/orderDetailController')

orderDetailRoute.get("/getOrderDetailByOrderId/:order_id", orderDetailController.getOrderDetailByOrderId)
orderDetailRoute.post("/addOrderDetail", orderDetailController.addOrderDetail)
orderDetailRoute.put("/updateOrderDetail/:id", orderDetailController.updateOrderDetail)
orderDetailRoute.delete("/deleteOrderDetail", orderDetailController.deleteOrderDetail)
module.exports = orderDetailRoute