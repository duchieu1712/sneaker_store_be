const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getBrand = async (req, res) => {
  try {
    const result = await model.brand.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addBrand = async (req, res) => {
  try {
    const { name, image, descrip } = req.body;
    const checkBrandExist = await model.brand.findOne({
      where: { name: name },
    });
    if (checkBrandExist) {
      response.errorCode("Brand existed", res);
    } else {
      const brandModel = {
        name,
        image,
        descrip,
      };
      const result = await model.brand.create(brandModel);
      response.successCode("Add brand success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res)
  }
};

module.exports = {
  getBrand,
  addBrand
};
