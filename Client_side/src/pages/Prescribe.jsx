import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Prescribe = () => {
  const { patientId } = useParams();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "prescriptions"); // Your Cloudinary upload preset

    try {
      // Upload to Cloudinary
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/do0kmajvs/image/upload",
        formData
      );

      const imageUrl = cloudinaryResponse.data.secure_url;

      // Save to your backend
      await axios.post("http://localhost:3000/api/doctor/upload-prescription", {
        patientId,
        imageUrl,
      });

      alert("Prescription uploaded successfully!");
      setImage(null); // Reset file input
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Prescription</h2>
      
      <input 
        type="file" 
        accept="image/*"
        onChange={handleImageChange} 
        className="mb-4 p-2 border rounded w-full"
      />

      <button
        onClick={handleUpload}
        disabled={!image || uploading}
        className={`w-full p-2 rounded text-white ${
          uploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Prescription"}
      </button>
    </div>
  );
};

export default Prescribe;
