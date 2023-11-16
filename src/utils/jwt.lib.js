const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/config");

exports.generateToken = (data) => {
  return jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "1d" });
};

exports.validateToken = (data) => {
  return jwt.verify(data, JWT_SECRET_KEY);
};
