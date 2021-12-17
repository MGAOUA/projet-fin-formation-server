const express = require("express");
const controller = require("./controller");
const commandRouter = express.Router();
commandRouter.post("/", controller.lancerCommande);

module.exports = commandRouter;
