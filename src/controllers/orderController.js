const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getOrders = async (req, res) => {
  try {
    const result = await model.order.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addOrder = async (req, res) => {
  try {
    const { user_id, total_price, order_time, VAT } = req.body;

    const orderModel = {
      user_id, total_price, order_time, VAT
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
    const result = await model.order.destroy({ where: { id: req.body }});
    response.successCode("Delete brand success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
module.exports = {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
};
