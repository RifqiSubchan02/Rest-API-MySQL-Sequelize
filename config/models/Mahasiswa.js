const { DataTypes } = require("sequelize");
const database = require("../database/mysql");

const Mahasiswa = database.define(
  "mahasiswa",
  {
    npm: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    prodi: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Mahasiswa.removeAttribute("id");
module.exports = Mahasiswa;
