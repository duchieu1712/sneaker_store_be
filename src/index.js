const express = require('express');
const initModel = require("./models/init-models");
const sequelize = require("./models/index");
const { response } = require('express');
const config = require('./config');
const model = initModel(sequelize);
const app = express();


app.use(express.static('.'))
app.use(express.json());

app.listen(config.port || 8080, () => {

})
app.get("/",async (req,res)=>{
   res.status(200).send("hello")
   
})
app.get("/getData",async (req,res)=>{
    try{
        const getUser = await model.product.findAll()
        res.send(200,getUser)
    }catch(error){
        res.status(500).send(error)
    }
   
})
app.post("/postData",async (req,res)=>{
    // try {
   let { name } = req.body;
       const productModel = {
           name
       }

       const result = await model.product.create(productModel)

       res.status(200).send(result)
//    } catch (err) {
//        res.status(500).send(err)
//    }
   
  
})

