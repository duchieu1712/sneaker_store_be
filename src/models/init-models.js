const DataTypes = require("sequelize").DataTypes;
const _brand = require("./brand");
const _category = require("./category");
const _product = require("./product");
const _size = require("./size");

function initModels(sequelize) {
  const brand = _brand(sequelize, DataTypes);
  const category = _category(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const size = _size(sequelize, DataTypes);

  product.belongsTo(brand, { as: "brand", foreignKey: "brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "brand_id"});
  product.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product, { as: "products", foreignKey: "category_id"});

  return {
    brand,
    category,
    product,
    size,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
