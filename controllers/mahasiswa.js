const { Mahasiswa } = require("../config/models");

exports.getAllMhs = async (req, res, next) => {
  await Mahasiswa.findAll()
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          message: "Semua data Mahasiswa",
          data: result,
        });
      } else {
        res.status(200).json({
          message: "Data Mahasiswa tidak ada",
          data: result,
        });
      }
    })
    .catch((error) => {
      res.status(404).json({
        message: error,
      });
    });
};

exports.getMhsById = async (req, res, next) => {
  const npm = req.params.id;
  await Mahasiswa.findOne({ where: { npm } })
    .then((result) => {
      if (result == null) {
        return res.status(404).json({
          message: `Mahasiswa dengan NPM ${npm} tidak ditemukan`,
        });
      }
      res.status(200).json({
        message: `Mahasiswa dengan NPM ${npm}`,
        data: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: error,
      });
    });
};

exports.createMhs = async (req, res, next) => {
  const npm = req.body.npm;
  const nama = req.body.nama;
  const prodi = req.body.prodi;
  const alamat = req.body.alamat;

  if (npm && nama && prodi && alamat != null) {
    await Mahasiswa.create({ npm, nama, prodi, alamat })
      .then((result) => {
        res.status(201).json({
          message: "Berhasil menambah data Mahasiswa",
          data: result,
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: error,
        });
      });
  } else {
    res.status(404).json({
      message: "Input semua data !!!",
    });
  }
};

exports.updateMhs = async (req, res, next) => {
  const npm = req.params.id;
  const nama = req.body.nama;
  const prodi = req.body.prodi;
  const alamat = req.body.alamat;
  await Mahasiswa.update({ nama, prodi, alamat }, { where: { npm } })
    .then((result) => {
      res.status(200).json({
        message: `Data Mahasiswa dengan NPM ${npm} berhasil diubah`,
        data: { npm, nama, prodi, alamat },
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: error,
      });
    });
};

exports.deleteMhs = async (req, res, next) => {
  const npm = req.params.id;
  await Mahasiswa.destroy({ where: { npm } })
    .then((result) => {
      if (result == 0) {
        res.status(404).json({
          message: `Data Mahasiswa dengan NPM ${npm} tidak ditemukan`,
        });
      }
      res.status(200).json({
        message: `Data Mahasiswa dengan NPM ${npm} berhasil dihapus`,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: error,
      });
    });
};

// const database = require("../config/database/mysql");

// exports.getAllMhs = (req, res, next) => {
//   let sql = "SELECT * FROM mahasiswa";
//   database.query(sql, (error, result, fields) => {
//     if (error) throw error;
//     res.status(200).json({
//       message: "Semua data Mahasiswa",
//       data: result,
//     });
//   });
// };

// exports.getMhsById = (req, res, next) => {
//   const mhsId = req.params.id;
//   let sql = `SELECT * FROM mahasiswa WHERE ${mhsId}`;
//   database.query(sql, (error, result, fields) => {
//     if (error) throw error;
//     if (result[0].npm != mhsId) {
//       return res.status(404).json({
//         message: `Mahasiswa dengan NPM ${mhsId} tidak ditemukan`,
//       });
//     }
//     res.status(200).json({
//       message: `Mahasiswa dengan NPM ${mhsId}`,
//       data: result,
//     });
//   });
// };

// exports.createMhs = (req, res, next) => {
//   const npm = req.body.npm;
//   const nama = req.body.nama;
//   const prodi = req.body.prodi;
//   const alamat = req.body.alamat;
//   const mahasiswa = {
//     npm: npm,
//     nama: nama,
//     prodi: prodi,
//     alamat: alamat,
//   };
//   let sql = `INSERT INTO mahasiswa (npm,nama,prodi,alamat) VALUES ('${npm}','${nama}','${prodi}','${alamat}')`;
//   database.query(sql, (error, result, fields) => {
//     if (error) throw error;
//     res.status(201).json({
//       message: "Berhasil menambah Mahasiswa",
//       data: mahasiswa,
//     });
//   });
// };

// exports.updateMhs = (req, res, next) => {
//   const npm = req.params.id;
//   const nama = req.body.nama;
//   const prodi = req.body.prodi;
//   const alamat = req.body.alamat;
//   let sql = `UPDATE mahasiswa SET nama='${nama}', prodi='${prodi}',alamat='${alamat}' WHERE npm='${npm}'`;
//   database.query(sql, (error, result, fields) => {
//     if (error) throw error;
//     res.status(200).json({
//       message: `Data Mahasiswa dengan NPM ${npm} berhasil diubah`,
//     });
//   });
// };

// exports.deleteMhs = (req, res, next) => {
//   const npm = req.params.id;
//   let sql = `DELETE FROM mahasiswa WHERE npm='${npm}'`;
//   database.query(sql, (error, result, fields) => {
//     if (error) {
//       console.log(error);
//       throw error;
//     }
//     res.status(200).json({
//       message: `Data Mahasiswa dengan NPM ${npm} berhasil dihapus`,
//     });
//   });
// };
