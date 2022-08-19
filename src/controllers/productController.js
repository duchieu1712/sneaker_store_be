const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);

const getProducts = async(req,res)=>{
    const result = await model.product.findAll({
        include:["brand","category"]

    })
    res.status(200).send(result)
}
const addProduct = async (req, res) => {
    try {
      const { name, price, descrip, highlights, size, category_id, brand_id, discount_id, orderdetail_id, image } = req.body;
      const checkProductExist = await model.product.findOne({
        where: { name: name },
      });
      if (checkProductExist) {
        response.errorCode("Brand existed", res);
      } else {
        const productModel = {
          name,
          price,
          highlights,
          size,
          category_id,
          brand_id,
          discount_id,
          orderdetail_id,
          image,
          descrip,
        };
        const result = await model.product.create(productModel);
        response.successCode("Add product success", result, res);
      }
    } catch (error) {
      response.failCode("Error", res)
    }
  };

module.exports ={
    getProducts,
    addProduct
}