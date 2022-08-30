const express = require('express')
const authController = require('../../controllers/authController')

const discountRoute = express.Router()

const discountController = require('../../controllers/discountController')

discountRoute.get("/getDiscounts", discountController.getDiscounts)
discountRoute.post("/addDiscount", authController.verifyToken, discountController.addDiscount)
discountRoute.put("/updateDiscount/:id", authController.verifyToken, discountController.updateDiscount)
discountRoute.post("/deleteDiscount", authController.verifyToken, discountController.deleteDiscount)
module.exports = discountRoute