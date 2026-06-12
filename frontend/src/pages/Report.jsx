import Navbar from "../components/Navbar";
import {
CircularProgressbar,
buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import jsPDF from "jspdf";

function Report() {
const atsScore =
Number(localStorage.getItem("atsScore")) || 0;

const resumeName =
localStorage.getItem("resumeName") ||
"Unknown Resume";

const selectedRole =
localStorage.getItem("selectedRole") ||
"Not Selected";

const matchedSkills =
JSON.parse(
localStorage.getItem("matchedSkills")
) || [];

const missingSkills =
JSON.parse(
localStorage.getItem("missingSkills")
) || [];

const resumeSkills =
JSON.parse(
localStorage.getItem("resumeSkills")
) || [];

const jdSkills =
JSON.parse(
localStorage.getItem("jdSkills")
) || [];

const feedback =
JSON.parse(
localStorage.getItem("feedback")
) || [];

const aiFeedback =
localStorage.getItem("aiFeedback") || "";

const downloadPDF = () => {
const doc = new jsPDF();


doc.setFontSize(18);
doc.text(
  "AI Resume Analyzer Report",
  20,
  20
);

doc.setFontSize(12);

doc.text(
  `Resume: ${resumeName}`,
  20,
  40
);

doc.text(
  `Role: ${selectedRole}`,
  20,
  50
);

doc.text(
  `ATS Score: ${atsScore}%`,
  20,
  60
);

doc.save("ATS_Report.pdf");


};

return (
<> <Navbar />


  <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold mb-8">
      Resume Analysis Report
    </h1>

    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col md:flex-row items-center gap-8">

        <div style={{ width: 180 }}>
          <CircularProgressbar
            value={atsScore}
            text={`${atsScore}%`}
            styles={buildStyles({
              textSize: "16px",
            })}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            ATS Score: {atsScore}%
          </h2>

          <p className="mt-3">
            <strong>Resume:</strong> {resumeName}
          </p>

          <p>
            <strong>Role:</strong> {selectedRole}
          </p>

          <p>
            <strong>Matched Skills:</strong>{" "}
            {matchedSkills.length} / {jdSkills.length}
          </p>

          <button
            onClick={downloadPDF}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Download PDF Report
          </button>
        </div>

      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Matched Skills
      </h2>

      <ul className="list-disc ml-6">
        {matchedSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Missing Skills
      </h2>

      <ul className="list-disc ml-6">
        {missingSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Resume Skills Found
      </h2>

      <ul className="list-disc ml-6">
        {resumeSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Suggestions
      </h2>

      <ul className="list-disc ml-6">
        {feedback.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        AI Resume Review
      </h2>

      <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
        {aiFeedback || "No AI review available."}
      </div>
    </div>

  </div>
</>


);
}

export default Report;
