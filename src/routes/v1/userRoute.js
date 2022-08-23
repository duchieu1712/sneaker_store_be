const express = require('express')

const userRoute = express.Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')
userRoute.get("/getUserList", userController.getUserList)
userRoute.post("/createUser",userController.createUser)
userRoute.post("/signIn",userController.signIn)
userRoute.post("/signUp",userController.signUp)

module.exports = userRoute