const express = require('express')

const discountRoute = express.Router()

const discountController = require('../../controllers/discountController')

discountRoute.get("/getDiscount", discountController.getDiscount)
discountRoute.post("/addDiscount", discountController.addDiscount)
discountRoute.put("/updateDiscount", discountController.updateDiscount)
discountRoute.delete("/deleteDiscount", discountController.deleteDiscount)
module.exports = discountRoute