const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { Op } = require("sequelize");

const getDeliveries = async (req, res) => {
  try {
    const result = await model.delivery.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addDelivery = async (req, res) => {
  try {
    const { name, price, estimate } = req.body;
    const checkDeliveryExist = await model.delivery.findOne({
      where: { name: name },
    });
    if (checkDeliveryExist) {
      response.errorCode("Delivery existed", res);
    } else {
      const deliveryModel = {
        name, price, estimate 
      };
      const result = await model.delivery.create(deliveryModel);
      response.successCode("Add delivery success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res)
  }
};

const updateDelivery = async (req,res) => {
  try {
    const {id}= req.params
    const { name, price, estimate } = req.body;
    const deliveryUpdate = await model.delivery.findByPk(id)
    const deliveryModel = {
        name, price, estimate
    }
    const result = await deliveryUpdate.update(deliveryModel)
    response.successCode("Update delivery success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteDelivery = async (req,res) => {
  try {
    const result = await model.delivery.destroy({ where: { id: req.body }});
    response.successCode("Delete delivery success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
const searchDeliveries = async (req,res)=> {
  try {
    const {search} = req.body
    const result = await model.delivery.findAll({
      where:{
        name: {[Op.like]: `%${search}%`}
      }
    })
    response.successCode("Search delivery success", result, res);
  }  catch(error){
    response.failCode("Error", res)
  }
}
module.exports = {
  getDeliveries,
  addDelivery,
  updateDelivery,
  deleteDelivery,
  searchDeliveries
};
