const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product_size.init(sequelize, DataTypes);
}

class product_size extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'size',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_size',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "size_id" },
        ]
      },
      {
        name: "size_id",
        using: "BTREE",
        fields: [
          { name: "size_id" },
        ]
      },
    ]
  });
  }
}
