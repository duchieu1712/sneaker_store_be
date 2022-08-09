const express = require('express')

const rootRouter = express.Router()
const userRoute = require('./v1/userRoute')
// const productRoute = require('./v1/productRoute')
const testRoute = require('./v1/testRoute')

rootRouter.use("/v1/user",userRoute)
// rootRouter.use("/v1/product",productRoute)
rootRouter.use("/v1/test",testRoute)

module.exports = rootRouter