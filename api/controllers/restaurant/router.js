const express = require("express");
const controller = require("./controller");
const restaurantRouter = express.Router();
restaurantRouter
  .get("/", controller.getListGlobalRestaurant)
  .get("/:id", controller.getListRestaurantById)
  .get("/search/", controller.getListRestaurantByName);

module.exports = restaurantRouter;
