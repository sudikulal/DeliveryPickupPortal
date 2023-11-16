const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const pickupController = require("../controllers/pickup.controller.js");

router.post("/addPickup", auth, pickupController.addPickup);
router.get("/listPickup", auth, pickupController.listPickup);

module.exports = router;
