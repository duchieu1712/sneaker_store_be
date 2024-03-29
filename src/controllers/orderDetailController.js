const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getOrderDetailByOrderId = async (req, res) => {
  try {
    const { order_id } = req.params;
    const result = await model.order_detail.findAll({
      where: {order_id: order_id},
      include: "product",
    });
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addOrderDetail = async (req, res) => {
  try {
    const result = await model.order_detail.bulkCreate(req.body);
    response.successCode("Add order_detail success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const updateOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const order_detailUpdate = await model.order_detail.findByPk(id);
    const order_detailModel = {
      amount,
    };
    const result = await order_detailUpdate.update(order_detailModel);
    response.successCode("Update order_detail success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const order_detailDelete = await model.order_detail.findByPk(id);
    const result = await order_detailDelete.destroy();
    response.successCode("Delete order_detail success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
module.exports = {
  addOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
  getOrderDetailByOrderId
};
