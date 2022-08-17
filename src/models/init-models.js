const DataTypes = require("sequelize").DataTypes;
const _brand = require("./brand");
const _category = require("./category");
const _delivery = require("./delivery");
const _discount = require("./discount");
const _order = require("./order");
const _order_detail = require("./order_detail");
const _product = require("./product");
const _user = require("./user");

function initModels(sequelize) {
  const brand = _brand(sequelize, DataTypes);
  const category = _category(sequelize, DataTypes);
  const delivery = _delivery(sequelize, DataTypes);
  const discount = _discount(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const order_detail = _order_detail(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  product.belongsTo(brand, { as: "brand", foreignKey: "brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "brand_id"});
  product.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product, { as: "products", foreignKey: "category_id"});
  product.belongsTo(discount, { as: "discount", foreignKey: "discount_id"});
  discount.hasMany(product, { as: "products", foreignKey: "discount_id"});
  delivery.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(delivery, { as: "deliveries", foreignKey: "order_id"});
  order_detail.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_detail, { as: "order_details", foreignKey: "order_id"});
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "product_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});

  return {
    brand,
    category,
    delivery,
    discount,
    order,
    order_detail,
    product,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
