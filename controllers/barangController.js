const Barang = require("../models/barang");
const respon = require("../util/response");

controller = {};

controller.getAll = async (req, res) => {
    try {
      const data = await Barang.findAll();
      return respon.response(res, 200, data, "data berhasil ditampilkan");
    } catch (error) {
      return respon.responseErr(res, 500, "Gagal menampilkan data barang", error.message);
    }
}

module.exports = controller;
