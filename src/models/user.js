const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
}

class user extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    user_password: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    address: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    user_type: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'user',
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
