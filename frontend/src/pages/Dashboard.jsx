import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const analyses =
    JSON.parse(
      localStorage.getItem("analyses")
    ) || [];

  const totalAnalyses =
    analyses.length;

  const averageScore =
    analyses.length > 0
      ? Math.round(
          analyses.reduce(
            (sum, item) =>
              sum + item.atsScore,
            0
          ) / analyses.length
        )
      : 0;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Total Analyses
            </h2>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {totalAnalyses}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Average ATS Score
            </h2>

            <p className="text-3xl font-bold text-green-600 mt-2">
              {averageScore}%
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Latest Role
            </h2>

            <p className="text-xl font-bold text-purple-600 mt-2">
              {analyses.length > 0
                ? analyses[
                    analyses.length - 1
                  ].role
                : "N/A"}
            </p>
          </div>

        </div>

        {/* Upload Button */}

        <div className="mt-8">
          <Link
            to="/upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Analyze New Resume
          </Link>
        </div>

        {/* History */}

        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Analysis History
          </h2>

          {analyses.length === 0 ? (
            <p>
              No resume analyses found.
            </p>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>
                  <tr className="bg-gray-200">

                    <th className="p-3 text-left">
                      Resume
                    </th>

                    <th className="p-3 text-left">
                      Role
                    </th>

                    <th className="p-3 text-left">
                      ATS Score
                    </th>

                    <th className="p-3 text-left">
                      Date
                    </th>

                  </tr>
                </thead>

                <tbody>
                  {analyses
                    .slice()
                    .reverse()
                    .map(
                      (
                        analysis,
                        index
                      ) => (
                        <tr
                          key={index}
                          className="border-b"
                        >
                          <td className="p-3">
                            {
                              analysis.resumeName
                            }
                          </td>

                          <td className="p-3">
                            {
                              analysis.role
                            }
                          </td>

                          <td className="p-3">
                            {
                              analysis.atsScore
                            }
                            %
                          </td>

                          <td className="p-3">
                            {
                              analysis.date
                            }
                          </td>
                        </tr>
                      )
                    )}
                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;