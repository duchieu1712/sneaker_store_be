const express = require('express')

const categoryRoute = express.Router()

const categoryController = require('../../controllers/categoryController')

categoryRoute.get("/getCategories", categoryController.getCategories)
categoryRoute.post("/addCategory", categoryController.addCategory)
categoryRoute.put("/updateCategory/:id", categoryController.updateCategory)
categoryRoute.delete("/deleteCategory", categoryController.deleteCategory)
module.exports = categoryRoute