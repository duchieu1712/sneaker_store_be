const express = require('express')

const brandRoute = express.Router()

const brandController = require('../../controllers/brandController')

brandRoute.get("/getBrand", brandController.getBrand)
brandRoute.post("/addBrand", brandController.addBrand)
brandRoute.put("/updateBrand", brandController.updateBrand)
brandRoute.delete("/deleteBrand", brandController.deleteBrand)
module.exports = brandRoute