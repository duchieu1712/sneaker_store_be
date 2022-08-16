const express = require('express')

const rootRouter = express.Router()
const userRoute = require('./v1/userRoute')
const productRoute = require('./v1/productRoute')
const brandRoute = require('./v1/brandRoute')
const categoryRoute = require('./v1/categoryRoute')
const discountRoute = require('./v1/discountRoute')
const orderDetailRoute = require('./v1/orderDetailRoute')
const orderRoute = require('./v1/orderRoute')
const deliveryRoute = require('./v1/deliveryRoute')

rootRouter.use("/v1/user",userRoute)
rootRouter.use("/v1/product",productRoute)
rootRouter.use("/v1/brand",brandRoute)
rootRouter.use("/v1/category",categoryRoute)
rootRouter.use("/v1/category",deliveryRoute)
rootRouter.use("/v1/category",discountRoute)
rootRouter.use("/v1/category",orderDetailRoute)
rootRouter.use("/v1/category",orderRoute)


module.exports = rootRouter