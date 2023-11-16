const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const deliveryController = require("../controllers/delivery.controller.js");

router.post("/addDelivery", auth, deliveryController.addDelivery);
router.get("/listDelivery", auth, deliveryController.listDelivery);

module.exports = router;
