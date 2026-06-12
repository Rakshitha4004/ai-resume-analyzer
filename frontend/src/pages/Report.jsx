import Navbar from "../Components/Navbar";

function Report() {
  const atsScore =
    localStorage.getItem("atsScore") || 0;

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

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis Report
        </h1>

        {/* Summary Card */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-3xl font-bold text-blue-600">
            ATS Score: {atsScore}%
          </h2>

          <p className="mt-3">
            <strong>Resume:</strong>{" "}
            {resumeName}
          </p>

          <p className="mt-2">
            <strong>Role:</strong>{" "}
            {selectedRole}
          </p>

          <p className="mt-2">
            <strong>Matched Skills:</strong>{" "}
            {matchedSkills.length} / {jdSkills.length}
          </p>

        </div>

        {/* Resume Skills */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Resume Skills Found
          </h2>

          {resumeSkills.length === 0 ? (
            <p>No skills detected.</p>
          ) : (
            <ul className="list-disc ml-6">
              {resumeSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}

        </div>

        {/* JD Skills */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Job Description Skills
          </h2>

          {jdSkills.length === 0 ? (
            <p>No skills detected.</p>
          ) : (
            <ul className="list-disc ml-6">
              {jdSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}

        </div>

        {/* Matched Skills */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Matched Skills
          </h2>

          {matchedSkills.length === 0 ? (
            <p>No matching skills found.</p>
          ) : (
            <ul className="list-disc ml-6">
              {matchedSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}

        </div>

        {/* Missing Skills */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Missing Skills
          </h2>

          {missingSkills.length === 0 ? (
            <p>No missing skills found.</p>
          ) : (
            <ul className="list-disc ml-6">
              {missingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}

        </div>

        {/* ATS Insights */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold mb-4">
            ATS Insights
          </h2>

          {atsScore >= 85 && (
            <p className="text-green-600 font-semibold">
              Excellent match for this role.
            </p>
          )}

          {atsScore >= 60 && atsScore < 85 && (
            <p className="text-yellow-600 font-semibold">
              Good match, but improvements can increase your chances.
            </p>
          )}

          {atsScore < 60 && (
            <p className="text-red-600 font-semibold">
              Resume needs improvement for this role.
            </p>
          )}

        </div>

        {/* Recommendations */}

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Recommendations
          </h2>

          <ul className="list-disc ml-6">

            <li>
              Tailor your resume to the selected role.
            </li>

            <li>
              Add measurable achievements and project outcomes.
            </li>

            <li>
              Include certifications relevant to the role.
            </li>

            {missingSkills.map((skill, index) => (
              <li key={index}>
                Consider adding experience with{" "}
                <strong>{skill}</strong>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </>
  );
}

export default Report;