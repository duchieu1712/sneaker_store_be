const express = require('express')

const rootRouter = express.Router()
const userRoute = require('./v1/userRoute')
const productRoute = require('./v1/productRoute')

rootRouter.use("/v1/user",userRoute)
rootRouter.use("/v1/product",productRoute)

module.exports = rootRouter