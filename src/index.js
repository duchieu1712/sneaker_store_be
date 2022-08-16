const express = require('express');
const rootRouter = require('./routes/index')
const app = express();
const config = require('../src/config')


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static('.'))
app.use(express.json());

app.listen(config.port || 8080, () => {

})

app.use("/api",rootRouter)

