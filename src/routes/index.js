const express = require('express')

const rootRouter = express.Router()
const userRoute = require('./v1/userRoute')
const productRoute = require('./v1/productRoute')
const brandRoute = require('./v1/brandRoute')
const categoryRoute = require('./v1/categoryRoute')

rootRouter.use("/v1/user",userRoute)
rootRouter.use("/v1/product",productRoute)
rootRouter.use("/v1/brand",brandRoute)
rootRouter.use("/v1/category",categoryRoute)

module.exports = rootRouter