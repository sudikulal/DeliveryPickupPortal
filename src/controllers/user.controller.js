const userModel = require("../models/user.model.js");
const { validateGoogleToken } = require("../service/firebase.service.js");
const { generateToken } = require("../utils/jwt.lib.js");
const crypto = require("crypto");

exports.login = async (req, res) => {
  try {
    let token = req.body?.google_token;
    if (!token) res.status(400).json({ message: "google token cannot be empty" });
    const googleId = validateGoogleToken(token);
    if (!googleId) res.status(400).json({ message: "invalid token" });

    const user = (
      await userModel.findOrCreate({
        where: {
          google_id: "test",
        },
        attributes: ["user_id"],
      })
    )[0];

    let accessTokenJti = crypto.randomUUID();

    const accessToken = generateToken({
      user_id: user.user_id,
      access_token_jti: accessTokenJti,
    });

    await userModel.update(
      { access_token_jti: accessTokenJti },
      { where: { user_id: user.user_id } }
    );

    res.json({ message: "success", access_token: accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while login" });
  }
};

