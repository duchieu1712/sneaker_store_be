const express = require('express');
const initModel = require("./models/init-models");
const sequelize = require("./models/index");
const model = initModel(sequelize);
const app = express();


app.use(express.static('.'))
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {

})

app.get("/getData",async (req,res)=>{
    try{
        const getUser = await model.product.findAll()
        res.send(200,getUser)
    }catch(error){
        res.send(500,error)
    }
   
})


