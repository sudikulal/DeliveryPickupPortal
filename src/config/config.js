require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT,DB_DIALECT,JWT_SECRET_KEY } = process.env;

module.exports = {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  JWT_SECRET_KEY
};
