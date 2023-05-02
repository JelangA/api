const User = require("../models/User");
const respon = require("../util/response");

controller = {};

controller.register = async (req, res) => {
  try {

    const reg = await User.create(req.body);
    return respon.response(res, 200, reg);

  } catch (error) {
    return respon.responseErr(res, 500, "Register Error", error.message);
  }
};

module.exports = controller;
