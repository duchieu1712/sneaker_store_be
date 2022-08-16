const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { base_url } = require("../config");

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
    // console.log(req.file.path);
    let { name, descrip } = req.body;
    // let image = `${base_url}public/img/${req.file?.filename}`
    let image = `${req.file?.path}`
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
    const { name, image, descrip } = req.body;
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
    const {id} = req.params;
    const brandDelete = await model.brand.findByPk(id);
    const result = await brandDelete.destroy();
    response.successCode("Delete brand success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getBrand,
  addBrand,
  updateBrand,
  deleteBrand
};
