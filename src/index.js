const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

require("./db/connect.js");

const userRouter = require("./routes/user.route.js");
const deliveryRouter = require("./routes/delivery.route.js");
const pickupRouter = require("./routes/pickup.route.js");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRouter);
app.use(deliveryRouter);
app.use(pickupRouter);

app.listen(port, () => {
  console.log("server is hosted on :", port);
});
