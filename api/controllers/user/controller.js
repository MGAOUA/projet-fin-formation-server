const user = require("../../../models/user");

var bcrypt = require("bcryptjs");

const getUserByEmail = async (req, res) => {
  const email = req.body.email;
  console.log(email);

  try {
    const userEmail = await user.findOne({ email: email });

    if (userEmail) {
      return res.status(200).send({
        message: "fetched sucessfuly",
        data: userEmail,
      });
      console.log(userEmail);
    } else {
      return res.status(404).send({
        message: "compte not found",
        data: {},
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "ERROR",
      error: error,
    });
  }
};

const getAllUsers = async (req, res) => {
  const users = await user.find();
  console.log(users);

  try {
    if (users)
      return res.status(200).send({
        message: " this are the list of uers",
        data: users,
      });
    else
      return res.status(404).send({
        message: "we dont found any users",
        data: {},
      });
  } catch (error) {
    return res.status(500).send({
      message: "error",
      data: error,
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const addUser = new user({ ...req.body });
    addUser.password = hash;
    const result = await addUser.save();
    return res.status(201).send({ message: "added", data: addUser });
  } catch (error) {
    res.status(500).send({ message: "error", error: error });
  }
};

module.exports = { getAllUsers, getUserByEmail, createNewUser };
