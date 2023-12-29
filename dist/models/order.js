const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order.init(sequelize, DataTypes);
}

class order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ordercreate_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VAT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    delivery_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'delivery',
        key: 'id'
      }
    },
    orderconfirm_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order',
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
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "delivery_id",
        using: "BTREE",
        fields: [
          { name: "delivery_id" },
        ]
      },
    ]
  });
  }
}
