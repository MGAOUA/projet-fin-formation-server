const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const restaurantShema = new Schema({
  _id: { type: String },
  identifiant: { type: Number },
  name: { type: String },
  description: { type: String },
  Contact: { type: String },
  photos: { type: String },
  menu: { type: String },
  dossierImage: { type: String },
  tables: { type: Array },
});

const restaurant = mongoose.model("restaurantsDetail", restaurantShema);

module.exports = restaurant;
