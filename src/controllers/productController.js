const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

const getProduct = async(req,res)=>{
    const result = await model.product.findAll({
        include:["brand","category"]

    })
    res.status(200).send(result)
}

module.exports ={
    getProduct
}