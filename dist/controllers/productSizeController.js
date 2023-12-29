const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getProductSizeList = async (req, res) => {
  try {
    const result = await model.product_size.findAll({include: ["product","size"]})
    response.successCode("Get success", result, res)
  } catch (error) {
    response.failCode("Error", res)
  }
}

const addProductSize = async (req, res) => {
  try {
    const { product_id, size_id, amount } = req.body;
    const productSizeModel = {
      product_id,
      size_id,
      amount,
    };
    const result = await model.product_size.create(productSizeModel);
    response.successCode("Add product size success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const updateProductSize = async (req, res) => {
  try {
    const { product_id, size_id, amount } = req.body;
    const productSizeUpdate = await model.product_size.findOne({
      where: {
        product_id: product_id,
        size_id: size_id,
      },
    });
    const orderModel = {
      product_id,
      size_id,
      amount,
    };
    const result = await productSizeUpdate.update(orderModel);
    response.successCode("Update amount product size success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

module.exports = {
  getProductSizeList,
  addProductSize,
  updateProductSize,
};
