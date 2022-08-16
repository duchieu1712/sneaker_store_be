const express = require('express')

const categoryRoute = express.Router()

const categoryController = require('../../controllers/categoryController')

categoryRoute.get("/getCategory", categoryController.getCategory)
categoryRoute.post("/addCategory", categoryController.addCategory)
categoryRoute.put("/updateCategory", categoryController.updateCategory)
categoryRoute.delete("/deleteCategory", categoryController.deleteCategory)
module.exports = categoryRoute