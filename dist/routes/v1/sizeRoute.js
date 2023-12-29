const express = require('express')
const authController = require('../../controllers/authController')

const sizeRoute = express.Router()

const sizeController = require('../../controllers/sizeController')

sizeRoute.get("/getSizes", sizeController.getSizes)
sizeRoute.post("/addSize", sizeController.addSize)
sizeRoute.put("/updateSize/:id", sizeController.updateSize)
sizeRoute.post("/deleteSize", sizeController.deleteSize)
sizeRoute.post("/searchSizes", sizeController.searchSizes)
module.exports = sizeRoute