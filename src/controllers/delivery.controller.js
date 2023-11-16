const deliveryDao = require("../models/delivery.model");
const userDao = require("../models/user.model");

exports.addDelivery = async (req, res) => {
  try {
    const { movies, rent, rented_days, delivery_charge } = req.body;
    const userObj = req.userObj;

    if (!movies)
      return res.status(400).json({ message: "movies cannot be empty" });
    if (!rent) return res.status(400).json({ message: "rent cannot be empty" });
    if (!rented_days)
      return res.status(400).json({ message: "days_rented cannot be empty" });
    if (!delivery_charge)
      return res
        .status(400)
        .json({ message: "delivery_charge cannot be empty" });

    const delivery = await deliveryDao.create({
      movies,
      rent,
      rented_days,
      delivery_charge,
      deliveried_by: userObj.user_id,
    });

    res
      .status(201)
      .json({ message: "Delivery details added successfully", delivery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.listDelivery = async (req, res) => {
  try {
    const delivery = await deliveryDao.findAll({
      attributes: [
        "movies",
        "rent",
        "rented_days",
        "delivery_charge",
        "deliveried_by",
      ],
    });

    res.status(201).json({ message: "Delivery List", delivery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
