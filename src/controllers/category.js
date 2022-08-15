const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");

const getCategory = async (req, res) => {
  try {
    const result = await model.category.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const checkCategoryExist = await model.category.findOne({
      where: { name: name },
    });
    if (checkCategoryExist) {
      response.errorCode("Category existed", res);
    } else {
      const categoryModel = {
        name
      };
      const result = await model.category.create(categoryModel);
      response.successCode("Add category success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res)
  }
};

const updateCategory = async (req,res) => {
  try {
    const {id}= req.params
    const { name } = req.body;
    const categoryUpdate = await model.category.findByPk(id)
    const categoryModel = {
      name
    }
    const result = await categoryUpdate.update(categoryModel)
    response.successCode("Update category success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

const deleteCategory = async (req,res) => {
  try {
    const {id} = req.params;
    const categoryDelete = await model.category.findByPk(id);
    const result = await categoryDelete.destroy();
    response.successCode("Delete category success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
};
