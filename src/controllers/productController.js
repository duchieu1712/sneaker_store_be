const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const { Op } = require("sequelize");
const { base_url } = require("../config");

const getProducts = async (req, res) => {
  try {
    const { brand, category, search } = req.query;
    let options = { where: {} };
    if (brand) {
      options.where.brand_id = brand;
    }
    if (category) {
      options.where.category_id = category;
    }
    if(search){
      options.where.name = {[Op.like]: `%${search}%`};
    }
    if (!brand && !category && !search) {
      options = { include: ["brand", "category", "discount"] };
    }
    result = await model.product.findAll(options);
    response.successCode("Get product success", result, res);
  } catch (err) {
    response.failCode("Error", res);
  }
};
const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await model.product.findByPk(id);
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.errorCode("Error", res)
  }
}

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
    } = req.body;
    const images = [];
    {
      req.files.map((item) => {
        const src = `${base_url}public/images/${item.filename}`;
        images.push(src);
      });
    }
    const checkProductExist = await model.product.findOne({
      where: { name: name },
    });
    const discount = await model.discount.findOne({
      where: { id: discount_id },
    });

    if (checkProductExist) {
      response.errorCode("Product existed", res);
    } else {
      const price_discounted = price - (price * discount.percent) / 100;
      const productModel = {
        name,
        price,
        highlights,
        size,
        category_id,
        brand_id,
        discount_id,
        image: images.toString(),
        descrip,
        price_discounted,
      };
      const result = await model.product.create(productModel);
      response.successCode("Add product success", result, res);
    }
  } catch (error) {
    response.failCode("Error", res);
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      descrip,
      highlights,
      size,
      category_id,
      brand_id,
      discount_id,
    } = req.body;
    const images = [];
    {
      req.files.map((item) => {
        const src = `${base_url}public/images/${item.filename}`;
        images.push(src);
      });
    }
    const productUpdate = await model.product.findByPk(id);
    const discount = await model.discount.findOne({
      where: { id: discount_id },
    });

    const price_discounted = price - (price * discount.percent) / 100;
    const productModel = {
      name,
      price,
      highlights,
      size,
      category_id,
      brand_id,
      discount_id,
      image: images.toString(),
      descrip,
      price_discounted,
    };
    const result = await productUpdate.update(productModel)
    response.successCode("Update product success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const deleteProduct = async (req,res) => {
  try {
    const result = await model.product.destroy({ where: { id: req.body }});
    response.successCode("Delete product success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};
