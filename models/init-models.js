const DataTypes = require("sequelize").DataTypes;
const _product = require("./product");

function initModels(sequelize) {
  const product = _product(sequelize, DataTypes);


  return {
    product,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
