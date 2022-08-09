const express = require('express');
const rootRouter = require('./routes/index')
const app = express();
const config = require('../src/config')


app.use(express.static('.'))
app.use(express.json());

app.listen(config.port || 8080, () => {

})

app.use("/api",rootRouter)

