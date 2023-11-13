const { Sequelize } = require("sequelize");

const { config } = require("./config");
const setupModels = require("../models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
  }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
