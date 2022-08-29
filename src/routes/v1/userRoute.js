const express = require('express')

const userRoute = express.Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')
userRoute.get("/getUserList", authController.verifyToken, userController.getUserList)
userRoute.get("/getUserById/:id", authController.verifyToken, userController.getUserById)
userRoute.post("/signIn",userController.signIn)
userRoute.post("/signUp",userController.signUp)
userRoute.post("/createUser", authController.verifyToken, userController.createUser)
userRoute.put("/updateUser/:id", authController.verifyToken, userController.updateUser)
userRoute.post("/deleteUser", authController.verifyToken, userController.deleteUser)
userRoute.put("/changePassword/:id", authController.verifyToken, userController.changePassword)
userRoute.put("/forgotPassword", userController.forgotPassword)

module.exports = userRoute