import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { roleSkills } from "../data/skills";
import { extractTextFromPDF } from "../utils/pdfExtractor";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [selectedRole, setSelectedRole] = useState(
    "Software Developer"
  );
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume PDF");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a Job Description");
      return;
    }

    setLoading(true);

    try {
      const skills = roleSkills[selectedRole];

      const resumeText =
        await extractTextFromPDF(file);

      const jdText =
        jobDescription.toLowerCase();

      const resumeSkills =
        skills.filter((skill) =>
          resumeText.includes(
            skill.toLowerCase()
          )
        );

      const jdSkills =
        skills.filter((skill) =>
          jdText.includes(
            skill.toLowerCase()
          )
        );

      const matchedSkills =
        jdSkills.filter((skill) =>
          resumeSkills.includes(skill)
        );

      const missingSkills =
        jdSkills.filter(
          (skill) =>
            !resumeSkills.includes(skill)
        );

      const skillMatchScore =
        jdSkills.length === 0
          ? 0
          : (matchedSkills.length /
              jdSkills.length) *
            100;

      const atsScore = Math.min(
        100,
        Math.round(skillMatchScore)
      );

      const previousAnalyses =
        JSON.parse(
          localStorage.getItem("analyses")
        ) || [];

      const newAnalysis = {
        resumeName: file.name,
        role: selectedRole,
        atsScore,
        matchedSkills:
          matchedSkills.length,
        totalRequiredSkills:
          jdSkills.length,
        date:
          new Date().toLocaleDateString(),
      };

      previousAnalyses.push(newAnalysis);

      localStorage.setItem(
        "analyses",
        JSON.stringify(previousAnalyses)
      );

      localStorage.setItem(
        "resumeSkills",
        JSON.stringify(resumeSkills)
      );

      localStorage.setItem(
        "jdSkills",
        JSON.stringify(jdSkills)
      );

      localStorage.setItem(
        "matchedSkills",
        JSON.stringify(matchedSkills)
      );

      localStorage.setItem(
        "missingSkills",
        JSON.stringify(missingSkills)
      );

      localStorage.setItem(
        "selectedRole",
        selectedRole
      );

      localStorage.setItem(
        "atsScore",
        atsScore
      );

      localStorage.setItem(
        "resumeName",
        file.name
      );

      localStorage.setItem(
        "totalResumes",
        previousAnalyses.length
      );

      localStorage.setItem(
        "analysisCount",
        previousAnalyses.length
      );

      navigate("/report");

    } catch (error) {
      console.error(error);

      alert(
        "Error reading PDF. Please upload a valid PDF file."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">

          <h1 className="text-3xl font-bold mb-6">
            Upload Resume
          </h1>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border p-3 rounded-lg"
          />

          {file && (
            <p className="mt-3 text-green-600">
              Selected File: {file.name}
            </p>
          )}

          <select
            value={selectedRole}
            onChange={(e) =>
              setSelectedRole(e.target.value)
            }
            className="w-full border p-3 rounded-lg mt-4"
          >
            {Object.keys(roleSkills).map(
              (role) => (
                <option
                  key={role}
                  value={role}
                >
                  {role}
                </option>
              )
            )}
          </select>

          <textarea
            placeholder="Paste Job Description Here..."
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg mt-4 h-56"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading
              ? "Analyzing Resume..."
              : "Analyze Resume"}
          </button>

        </div>
      </div>
    </>
  );
}

export default UploadResume;