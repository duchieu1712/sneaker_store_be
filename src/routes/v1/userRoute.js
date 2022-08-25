const express = require('express')

const userRoute = express.Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')
userRoute.get("/getUserList", authController.verifyToken, userController.getUserList)
userRoute.post("/signIn",userController.signIn)
userRoute.post("/signUp",userController.signUp)
userRoute.post("/updateUser/:id", authController.verifyToken, userController.updateUser)
userRoute.post("/deleteUser", authController.verifyToken, userController.deleteUser)

module.exports = userRoute