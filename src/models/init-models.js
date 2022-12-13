const DataTypes = require("sequelize").DataTypes;
const _brand = require("./brand");
const _category = require("./category");
const _user = require("./user");

function initModels(sequelize) {
  const brand = _brand(sequelize, DataTypes);
  const category = _category(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);


  return {
    brand,
    category,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
