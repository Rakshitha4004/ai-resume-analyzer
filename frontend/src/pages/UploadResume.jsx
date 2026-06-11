import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please select a resume first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Save data locally
      localStorage.setItem("totalResumes", "1");
      localStorage.setItem("analysisCount", "1");
      localStorage.setItem("atsScore", "78");

      setLoading(false);

      navigate("/report");
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">

          <h1 className="text-3xl font-bold mb-6">
            Upload Resume
          </h1>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full border p-3 rounded-lg"
          />

          {file && (
            <p className="mt-4 text-green-600">
              Selected File: {file.name}
            </p>
          )}

          <button
            onClick={handleAnalyze}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>
      </div>
    </>
  );
}

export default UploadResume;