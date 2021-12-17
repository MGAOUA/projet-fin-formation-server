const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commandShema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    Contact: { type: String },
    photos: { type: String },
    menu: { type: String },
    dossierImage: { type: String },
    commandNumber: { type: String },
    detail: { type: String },
    prixTotal: { type: Number },
  },
  { collection: "commands" }
);

const command = mongoose.model("commands", commandShema);

module.exports = command;
