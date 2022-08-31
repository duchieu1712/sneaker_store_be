const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  const result = await model.product.findAll({
    include: ["brand", "category"],
  });
  res.status(200).send(result);
};
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      descrip,
      highlights,
      size,
      category_id,
      brand_id,
      discount_id,
      orderdetail_id,
      image,
    } = req.body;
    const checkProductExist = await model.product.findOne({
      where: { name: name },
    });
    if (checkProductExist) {
      response.errorCode("Brand existed", res);
    } else {
      const productModel = {
        name,
        price,
        highlights,
        size,
        category_id,
        brand_id,
        discount_id,
        orderdetail_id,
        image,
        descrip,
      };
      const result = await model.product.create(productModel);
      response.successCode("Add product success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res);
  }
};
const filterProducts = async (req, res) => {
  try {
    const { brand, category } = req.query;
    const brandId = await model.brand.findOne({ where: { name: brand } });
    const categoryId = await model.category.findOne({
      where: { name: category },
    });
    if (brand !== null && category !== null) {
      const result = await model.product.findAll({
        where: {
          brand_id: brandId,
          category_id: categoryId,
        },
      });
      response.successCode("Filter product success", result, res);
    } else if (brand !== null || category !== null) {
      const result = await model.product.findAll({
        where: {
          [Op.or]: [{ brand_id: brandId }, { category_id: categoryId }],
        },
      });
      response.successCode("Filter product success", result, res);
    }
  } catch (err) {
    response.failCode("Error", res);
  }
};

module.exports = {
  getProducts,
  addProduct,
  filterProducts,
};
