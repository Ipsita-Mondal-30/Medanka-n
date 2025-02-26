const { cloudinary, upload } = require("../config/cloudinary");

exports.uploadPrescription = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Cloudinary will handle the upload automatically via multer
    return res.status(200).json({ secure_url: req.file.path });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};
