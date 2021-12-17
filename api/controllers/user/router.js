const express = require("express");

const controller = require("./controller");
const validators = require("../../../validators/user");
const userRouter = express.Router();

userRouter
  .get("/", controller.getAllUsers)
  .get("/connect", controller.getUserByEmail)
  .post("/", validators.validatePost, controller.createNewUser);

module.exports = userRouter;
