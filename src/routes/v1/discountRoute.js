const express = require('express')

const discountRoute = express.Router()

const discountController = require('../../controllers/discountController')

discountRoute.get("/getDiscounts", discountController.getDiscounts)
discountRoute.post("/addDiscount", discountController.addDiscount)
discountRoute.put("/updateDiscount/:id", discountController.updateDiscount)
discountRoute.delete("/deleteDiscount", discountController.deleteDiscount)
module.exports = discountRoute