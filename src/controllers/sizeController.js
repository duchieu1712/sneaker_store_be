const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getSizes = async (req, res) => {
  try {
    const result = await model.size.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addSize = async (req, res) => {
  try {
    const { name } = req.body;
    const checkSizeExist = await model.size.findOne({
      where: { name: name },
    });
    if (checkSizeExist) {
      response.errorCode("Size existed", res);
    } else {
      const sizeModel = {
        name
      };
      const result = await model.size.create(sizeModel);
      response.successCode("Add size success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res)
  }
};

const updateSize = async (req,res) => {
  try {
    const {id}= req.params
    const { name } = req.body;
    const sizeUpdate = await model.size.findByPk(id)
    const sizeModel = {
        name
    }
    const result = await sizeUpdate.update(sizeModel)
    response.successCode("Update size success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteSize = async (req,res) => {
  try {
    const result = await model.size.destroy({ where: { id: req.body }});
    response.successCode("Delete size success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getSizes,
  addSize,
  updateSize,
  deleteSize
};
