const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { Op } = require("sequelize");
const { base_url } = require("../config");

const addProductSize = async (req, res) => {
  try {
    const { product_id, size_id, amount } = req.body;
    const orderModel = {
      product_id,
      size_id,
      amount,
    };
    const result = await model.order.create(orderModel);
    response.successCode("Add order success", result, res);
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
  addProductSize,
  updateProductSize,
};
