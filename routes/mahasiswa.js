const express = require("express");
const {
  getAllMhs,
  createMhs,
  updateMhs,
  deleteMhs,
  getMhsById,
} = require("../controllers/mahasiswa");
const router = express.Router();

router.get("/mahasiswa", getAllMhs);
router.get("/mahasiswa/:id", getMhsById);
router.post("/mahasiswa", createMhs);
router.put("/mahasiswa/:id", updateMhs);
router.delete("/mahasiswa/:id", deleteMhs);

module.exports = router;
