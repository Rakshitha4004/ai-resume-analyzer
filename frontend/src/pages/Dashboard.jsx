import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const totalResumes =
    localStorage.getItem("totalResumes") || 0;

  const analysisCount =
    localStorage.getItem("analysisCount") || 0;

  const atsScore =
    localStorage.getItem("atsScore") || 0;

  const analyses =
    JSON.parse(
      localStorage.getItem("analyses")
    ) || [];

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-lg text-gray-600">
              Welcome, {user?.name}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

        <div className="flex gap-4 mb-8">

          <Link
            to="/upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Upload Resume
          </Link>

          <Link
            to="/report"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            View Report
          </Link>

        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-8">

          <h2 className="text-2xl font-bold mb-4">
            User Profile
          </h2>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Status:</strong> Active
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Resumes
            </h2>

            <p className="text-3xl mt-4 text-blue-600">
              {totalResumes}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Analyses Completed
            </h2>

            <p className="text-3xl mt-4 text-green-600">
              {analysisCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Latest ATS Score
            </h2>

            <p className="text-3xl mt-4 text-purple-600">
              {atsScore}
            </p>
          </div>

        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Resume History
          </h2>

          {analyses.length === 0 ? (
            <p>No resumes analyzed yet.</p>
          ) : (
            analyses.map((analysis, index) => (
              <div
                key={index}
                className="border-b py-3"
              >
                <p>
                  <strong>Resume:</strong>{" "}
                  {analysis.resumeName}
                </p>

                <p>
                  <strong>ATS Score:</strong>{" "}
                  {analysis.atsScore}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {analysis.date}
                </p>
              </div>
            ))
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;