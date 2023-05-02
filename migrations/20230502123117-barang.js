"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_barang", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kode_barang: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nama_barang: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expired_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      jumlah_barang: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      satuan: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      harga_satuan: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbl_barang");
  },
};
