const express = require('express')
const authController = require('../../controllers/authController')

const categoryRoute = express.Router()

const categoryController = require('../../controllers/categoryController')

categoryRoute.get("/getCategories", categoryController.getCategories)
categoryRoute.post("/addCategory", authController.verifyToken, categoryController.addCategory)
categoryRoute.put("/updateCategory/:id", authController.verifyToken, categoryController.updateCategory)
categoryRoute.delete("/deleteCategory", authController.verifyToken, categoryController.deleteCategory)
module.exports = categoryRoute