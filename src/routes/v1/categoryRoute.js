const express = require('express')

const categoryRoute = express.Router()

const categoryController = require('../../controllers/categoryController')

categoryRoute.get("/getBrand", categoryController.getBrand)
categoryRoute.post("/addBrand", categoryController.addBrand)
categoryRoute.put("/updateBrand", categoryController.updateBrand)
categoryRoute.delete("/deleteBrand", categoryController.deleteBrand)
module.exports = categoryRoute