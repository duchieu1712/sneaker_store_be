const express = require('express');
const rootRouter = require('./routes/index')
const app = express();
const config = require('../src/config')
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use(express.static('.'))
app.use(express.json());

app.listen(config.port || 8080, () => {

})

app.use("/api",rootRouter)

