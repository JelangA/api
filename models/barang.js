const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Barang = sequelize.define(
  "tbl_barang",
  {
    id: {
      field: "id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    kode_barang: {
      field: "kode_barang",
      allowNull: false,
      type: DataTypes.STRING,
    },
    nama_barang: {
      field: "nama_barang",
      allowNull: false,
      type: DataTypes.STRING,
    },
    expired_date: {
      field: "expired_date",
      allowNull: false,
      type: DataTypes.DATE,
    },
    jumlah_barang: {
      field: "jumlah_barang",
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    satuan: {
      field: "satuan",
      allowNull: false,
      type: DataTypes.STRING,
    },
    harga_satuan: {
      field: "harga_satuan",
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "tbl_barang",
  }
);

module.exports = Barang;
