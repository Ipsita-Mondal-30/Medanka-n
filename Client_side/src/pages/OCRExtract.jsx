import React, { useState } from "react";
import Tesseract from "tesseract.js";

const OCRExtract = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [extracting, setExtracting] = useState(false);
  const [extractedText, setExtractedText] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleExtractText = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setExtracting(true);
    setExtractedText("");

    try {
      const { data: { text } } = await Tesseract.recognize(image, "eng");
      setExtractedText(text.trim());
    } catch (error) {
      console.error("Text extraction failed", error);
      alert("Failed to extract text. Please try again.");
    } finally {
      setExtracting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          OCR Text Extraction
        </h2>

        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />

          {preview && (
            <div className="mb-4 w-full">
              <h3 className="text-lg font-semibold text-gray-700">Preview:</h3>
              <img src={preview} alt="Preview" className="w-full rounded-lg shadow-md" />
            </div>
          )}

          <button
            onClick={handleExtractText}
            disabled={!image || extracting}
            className={`w-full p-3 rounded text-white text-lg font-semibold transition ${
              extracting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {extracting ? "Extracting Text..." : "Extract Text"}
          </button>

          {extractedText && (
            <div className="mt-6 p-4 bg-gray-200 rounded-lg w-full">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Extracted Text:</h3>
              <p className="whitespace-pre-wrap text-gray-800">{extractedText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OCRExtract;
