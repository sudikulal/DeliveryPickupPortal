const { DataTypes } = require("sequelize");
const sequelize = require("../db/connect.js");

const Delivery = sequelize.define("delivery", {
  delivery_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  movies: {
    type: DataTypes.STRING,
  },
  rent: {
    type: DataTypes.FLOAT,
  },
  rented_days: {
    type: DataTypes.INTEGER,
  },
  delivery_charge: {
    type: DataTypes.FLOAT,
  },
  deliveried_by: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});


module.exports = Delivery;
