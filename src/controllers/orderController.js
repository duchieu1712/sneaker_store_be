const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getOrders = async (req, res) => {
  try {
    const result = await model.order.findAll({ include: ["user", "delivery","order_details"] });
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const addOrder = async (req, res) => {
  try {
    const { delivery_id, total_price, user_id, order_detail } = req.body;

    const orderModel = { delivery_id, total_price, user_id };
    const createOrder = await model.order.create(orderModel);
    if (createOrder) {
      const newOrder_id = createOrder.id;
      const orderDetailModel = [];
      order_detail.map( async (item) => {
        const orderDetailItem = Object.assign(item, { order_id: newOrder_id });
        orderDetailModel.push(orderDetailItem);
        const productSize = await model.product_size.findOne({where: {product_id: item.product_id, size_id: item.size_id}})
        const productSizeAmount = {
          amount: amount - item.amount
        }
        const updateProductSize = await productSize.update(productSizeAmount)
      });
      const result = await model.order_detail.bulkCreate(
        orderDetailModel
      );
      
      response.successCode("Add order success", result, res);
    }else{
      response.errorCode("Error", res);
    }
    
  } catch (error) {
    response.failCode("Error", res);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { total_price, delivery_id, VAT, orderconfirm_time, order_status } =
      req.body;
    const orderUpdate = await model.order.findByPk(id);
    const orderModel = {
      total_price,
      delivery_id,
      VAT,
      orderconfirm_time,
      order_status,
    };
    const result = await orderUpdate.update(orderModel);
    response.successCode("Update order success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const result = await model.order.destroy({ where: { id: req.body } });
    response.successCode("Delete order success", result, res);
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
