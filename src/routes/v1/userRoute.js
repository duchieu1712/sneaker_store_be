const express = require('express')

const userRoute = express.Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, `${process.cwd()}/public/img`)
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + file.originalname; //60423412312+ten_img.jpg
//         cb(null, uniqueSuffix)
//     }
// })

// const upload = multer({ storage })

// userRoute.post("/upload", upload.single("avatar"), (req, res) => {
//     res.send(req.file)
// })

//r
// userRoute.get("/getUser", authController.verifyToken ,userController.getUser)
// userRoute.get("/getUserById/:id", userController.getUserById)
userRoute.get("/getUsers", userController.getUsers)
//C
userRoute.post("/createUser",userController.createUser)
//U
// userRoute.put("/updateUser/:id",userController.updateUser)
//D
// userRoute.delete("/deleteUser/:id",userController.deleteUser)
// userRoute.post("/signup",userController.signUp)
// userRoute.post("/signin",userController.signIn)

module.exports = userRoute