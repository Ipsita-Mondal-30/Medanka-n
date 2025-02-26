const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");
const { uploadPrescription } = require("../controllers/doctorController");

router.post("/upload-prescription", upload.single("file"), uploadPrescription);

module.exports = router;
