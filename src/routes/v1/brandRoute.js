const express = require('express')

const brandRoute = express.Router()

const brandController = require('../../controllers/brandController')
const upload = require('../../config/upload')


brandRoute.get("/getBrand", brandController.getBrand)
brandRoute.post("/addBrand",upload.single("brand"), brandController.addBrand)
brandRoute.put("/updateBrand", brandController.updateBrand)
brandRoute.delete("/deleteBrand", brandController.deleteBrand)
module.exports = brandRoute