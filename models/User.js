const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "tbl_user",
  {
    id: {
      field: "id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nama_lengkap: {
      field: "nama_lengkap",
      allowNull: false,
      type: DataTypes.STRING,
    },

    username: {
      field: "username",
      allowNull: false,
      type: DataTypes.STRING,
    },
    alamat: {
      field: "alamat",
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      field: "password",
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "tbl_user",
  }
);

module.exports = User;
