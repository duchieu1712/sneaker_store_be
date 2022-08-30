const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getDiscounts = async (req, res) => {
  try {
    const result = await model.discount.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addDiscount = async (req, res) => {
  try {
    const { name, percent, price_discount } = req.body;
    const checkDiscountExist = await model.discount.findOne({
      where: { name: name },
    });
    if (checkDiscountExist) {
      response.errorCode("Discount existed", res);
    } else {
      const discountModel = {
        name, percent, price_discount
      };
      const result = await model.discount.create(discountModel);
      response.successCode("Add discount success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res)
  }
};

const updateDiscount = async (req,res) => {
  try {
    const {id}= req.params
    const { name, percent, price_discount } = req.body;
    const discountUpdate = await model.discount.findByPk(id)
    const discountModel = {
        name, percent, price_discount
    }
    const result = await discountUpdate.update(discountModel)
    response.successCode("Update discount success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteDiscount = async (req,res) => {
  try {
    const result = await model.category.destroy({ where: { id: req.body }});
    response.successCode("Delete discount success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getDiscounts,
  addDiscount,
  updateDiscount,
  deleteDiscount
};
