const express = require('express')
const authController = require('../../controllers/authController')

const categoryRoute = express.Router()

const categoryController = require('../../controllers/categoryController')

categoryRoute.get("/getCategories", categoryController.getCategories)
categoryRoute.post("/addCategory", authController.verifyToken, categoryController.addCategory)
categoryRoute.put("/updateCategory/:id", authController.verifyToken, categoryController.updateCategory)
categoryRoute.post("/deleteCategory", authController.verifyToken, categoryController.deleteCategory)
categoryRoute.post("/searchCategories", categoryController.searchCategories)
module.exports = categoryRoute