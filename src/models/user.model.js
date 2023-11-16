const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect.js");

const userModel = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  google_id: {
    type: DataTypes.STRING,
  },
  access_token_jti: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = userModel;
