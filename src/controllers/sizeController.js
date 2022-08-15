const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getSize = async (req, res) => {
  try {
    const result = await model.size.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addSize = async (req, res) => {
  try {
    const { size } = req.body;
    const checkSizeExist = await model.size.findOne({
      where: { size: size },
    });
    if (checkSizeExist) {
      response.errorCode("Size existed", res);
    } else {
      const sizeModel = {
        size
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
    const { size } = req.body;
    const sizeUpdate = await model.size.findByPk(id)
    const sizeModel = {
      size
    }
    const result = await sizeUpdate.update(sizeModel)
    response.successCode("Update size success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteSize = async (req,res) => {
  try {
    const {id} = req.params;
    const sizeDelete = await model.size.findByPk(id);
    const result = await sizeDelete.destroy();
    response.successCode("Delete size success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getSize,
  addSize,
  updateSize,
  deleteSize
};
