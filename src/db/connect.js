const { Sequelize } = require("sequelize");
const {DB_NAME, DB_USER, DB_PASSWORD,DB_HOST,DB_PORT,DB_DIALECT} = require("../config/config.js");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

module.exports = sequelize
