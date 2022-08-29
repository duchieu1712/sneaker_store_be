const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { base_url } = require("../config");

const getBrands = async (req, res) => {
  try {
    const result = await model.brand.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addBrand = async (req, res) => {
  try {
    let { name, descrip } = req.body;
    let image = `${base_url}public/images/${req.file?.filename}`
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

const updateBrand = async (req,res) => {
  try {
    const {id}= req.params
    const { name, descrip } = req.body;
    let image = `${base_url}public/images/${req.file?.filename}`
    const brandUpdate = await model.brand.findByPk(id)
    const brandModel = {
      name,image,descrip
    }
    const result = await brandUpdate.update(brandModel)
    response.successCode("Update brand success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteBrand = async (req,res) => {
  try {
    const result = await model.brand.destroy({ where: { id: req.body }});
    response.successCode("Delete brand success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand
};
