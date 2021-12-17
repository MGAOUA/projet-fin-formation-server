const joi = require("joi");
const validatePost = (req, res, next) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      phone: joi.string().required(),
      email: joi.string().email().required(),
      contact: joi.string().required(),
      password: joi.string().required(),
    });
    const result = schema.validate(req.body);
    if (result.error)
      return res
        .status(400)
        .send({ messsage: "invalide user", error: result.error });
    next();
  } catch (error) {
    return res.status(500).send({ messsage: "error", error: result.error });
  }
};

module.exports = { validatePost };
