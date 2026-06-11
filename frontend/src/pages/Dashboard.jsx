import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Resumes
            </h2>

            <p className="text-3xl mt-4 text-blue-600">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Analyses Completed
            </h2>

            <p className="text-3xl mt-4 text-green-600">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Average ATS Score
            </h2>

            <p className="text-3xl mt-4 text-purple-600">
              0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;