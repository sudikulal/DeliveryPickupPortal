const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect.js");

const Pickup = sequelize.define("pickup", {
  pickup_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  movies: {
    type: DataTypes.STRING,
  },
  picked_by: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue:1
  },
});

module.exports = Pickup;
