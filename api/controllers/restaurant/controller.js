const restaurant = require("../../../models/restaurant");

const getListGlobalRestaurant = async (req, res) => {
  const restaurants = await restaurant.find({});
  res.status(200).send({
    message: "fetched sucessfuly",
    data: restaurants,
  });
};

const getListRestaurantByName = async (req, res) => {
  const name = req.body.name;
  console.log("name:", name);
  const restaurants = await restaurant.findOne({ name: name });
  if (!restaurants)
    return res.status(404).send({ message: "data not found", data: {} });

  return res.status(200).send({
    message: "fetched sucessfuly",
    data: restaurants,
  });
};

const getListRestaurantById = async (req, res) => {
  const id = req.params.id;
  console.log("req :", req.params);
  console.log("id:", id);
  const restaurantFind = await restaurant.findOne({ identifiant: id });
  console.log("restaurantFind:", restaurantFind);
  if (!restaurantFind)
    return res.status(404).send({ message: "data not found", data: {} });

  return res.status(200).send({
    message: "fetched sucessfuly",
    data: restaurantFind,
  });
};

module.exports = {
  getListGlobalRestaurant,
  getListRestaurantById,
  getListRestaurantByName,
};
