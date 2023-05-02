const User = require("../models/User");
const respon = require("../util/response");

controller = {};

controller.register = async (req, res) => {
  try {

    const reg = await User.create(req.body);
    return respon.response(res, 200, reg);

  } catch (error) {
    return respon.responseErr(res, 500, "Registerasi Gagal", error.message);
  }
};

controller.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (user === null){
      return respon.responseErr(res, 400, "Login Gagal", "User Not Fond");
    }
    const data = user;
    return respon.response(res, 200, data, "Login Berhasil");

  } catch (error) {
    return respon.responseErr(res, 500, "Login Gagal", error.message);
  }
}

module.exports = controller;
