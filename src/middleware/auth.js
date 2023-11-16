const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/config.js");
const userDao = require("../models/user.model.js");

const auth = async (req, res, next) => {
  const token = req.headers["access_token"];

  if (!token) return res.status(400).json({ message: "Token cannot be empty" });

  try {
    jwt.verify(token, JWT_SECRET_KEY, async (err, user) => {
      if (err) return res.status(401).json({ message: "Invalid token" });

      const userDetail = await userDao.findOne({
        where: {
          user_id: user.user_id,
        },
      });

      if (!userDetail) return res.status(400).json({ message: "Invalid user" });

      if (userDetail.access_token_jti !== user.access_token_jti) {
        return res.status(400).json({ message: "Invalid token" });
      }

      req.userObj = user;
      next();
    });
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = auth;
