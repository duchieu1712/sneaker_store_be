const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('heroku_432eddd25e56548', 'bf4393f0e4dbdf', 'df42386e', {
    host: 'us-cdbr-east-06.cleardb.net',
    port: 3306,
    dialect: 'mysql'
  });

  module.exports = sequelize