const express = require('express')

const brandRoute = express.Router()

const brandController = require('../../controllers/brandController')

brandRoute.get("/getBrand", brandController.getBrand)
brandRoute.post("/addBrand", brandController.addBrand)

module.exports = brandRoute