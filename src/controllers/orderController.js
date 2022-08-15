const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getOrder = async (req, res) => {
  try {
    const result = await model.order.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addOrder = async (req, res) => {
  try {
    const { total_price, order_time, VAT } = req.body;

    const orderModel = {
        total_price, order_time, VAT
    };
    const result = await model.order.create(orderModel);
    response.successCode("Add order success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { total_price, order_time, VAT } = req.body;
    const orderUpdate = await model.order.findByPk(id);
    const orderModel = {
        total_price, order_time, VAT
    };
    const result = await orderUpdate.update(orderModel);
    response.successCode("Update order success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDelete = await model.order.findByPk(id);
    const result = await orderDelete.destroy();
    response.successCode("Delete order success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
module.exports = {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
