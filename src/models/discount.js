const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return discount.init(sequelize, DataTypes);
}

class discount extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price_discounted: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
