const express = require('express')
const testController = require('../../controllers/testController')

const testRoute = express.Router()

testRoute.get("/testData" ,testController.test)

module.exports = testRoute