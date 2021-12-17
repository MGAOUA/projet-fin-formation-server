const express = require("express");
const cors = require("cors");
const app = express();
const restaurantRouter = require("./api/controllers/restaurant/router");
const userRouter = require("./api/controllers/user/router");
const commandRouter = require("./api/controllers/command/router");
const mongoose = require("mongoose");

const db = mongoose.connection;
db.once("open", () => console.log("bdd connected"));

mongoose.connect("mongodb://127.0.0.1:27017/restaurants", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
app.use(cors());
app.use(express.json());
app.use("/restaurants", restaurantRouter);
app.use("/users", userRouter);
app.use("/commands", commandRouter);
const port = "5000";
app.listen(port, () => {
  console.log("hello how a can help you");
});
