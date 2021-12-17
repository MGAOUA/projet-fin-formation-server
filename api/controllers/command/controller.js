const command = require("../../../models/command");
const lancerCommande = async (req, res) => {
  const restaurantName = req.body.name;

  // const _restaurantCommands = await command.find({
  //   name: restaurantName,
  // });

  // return res.status(404).send({ message: "data not found", data: {} });
  const newcommand = new command({ ...req.body });
  const result = await newcommand.save();
  return res.status(201).send({ message: "added", data: newcommand });
};
// const getPicturesListe = () => {};
module.exports = { lancerCommande };
