import Navbar from "../components/Navbar";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Please Login First
      </h1>
    );
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const totalResumes =
    localStorage.getItem("totalResumes") || 0;

  const analysisCount =
    localStorage.getItem("analysisCount") || 0;

  const atsScore =
    localStorage.getItem("atsScore") || 0;

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        {/* Header */}
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
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">

          <a
            href="/upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Upload Resume
          </a>

          <a
            href="/report"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            View Report
          </a>

        </div>

        {/* User Profile */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">

          <h2 className="text-2xl font-bold mb-4">
            User Profile
          </h2>

          <p className="mb-2">
            <strong>Name:</strong> {user?.name}
          </p>

          <p className="mb-2">
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Status:</strong> Active
          </p>

        </div>

        {/* Stats Cards */}
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
              Average ATS Score
            </h2>

            <p className="text-3xl mt-4 text-purple-600">
              {atsScore}
            </p>
          </div>

        </div>

        {/* Recent Analysis */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Recent Analysis
          </h2>

          <p className="mb-2">
            Resume.pdf
          </p>

          <p className="mb-2">
            ATS Score: {atsScore}
          </p>

          <p>
            Status: Completed
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;