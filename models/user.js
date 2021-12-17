const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userShema = new Schema(
  {
    name: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: String, require: true },
    password: { type: String, require: true },
  },
  { collection: "users" }
);

const user = mongoose.model("users", userShema);

module.exports = user;
