const express = require('express')

const brandRoute = express.Router()

const brandController = require('../../controllers/brandController')
const upload = require('../../config/upload')


brandRoute.get("/getBrands", brandController.getBrands)
brandRoute.post("/addBrand",upload.single("image"), brandController.addBrand)
brandRoute.patch("/updateBrand/:id",upload.single("image"), brandController.updateBrand)
brandRoute.post("/deleteBrand", brandController.deleteBrand)
module.exports = brandRoute