const pickupDao = require("../models/pickup.model");
const userDao = require("../models/user.model");

exports.addPickup = async (req, res) => {
  try {
    const { movies } = req.body;

    const userObj = req.userObj;

    if (!movies)
      return res.status(400).json({ message: "movies cannot be empty" });

    const pickup = await pickupDao.create({
      movies,
      picked_by: userObj.user_id,
    });

    res
      .status(201)
      .json({ message: "Pickup details added successfully", pickup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "something went wrong " });
  }
};

exports.listPickup = async (req, res) => {
  try {
    const pickup = await pickupDao.findAll({
      where: {},
      attributes: ["movies", "picked_by"],
    });

    res.status(201).json({ message: "pickup List", pickup });
  } catch {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
