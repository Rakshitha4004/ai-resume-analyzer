import Navbar from "../components/Navbar";

function Dashboard() {
  const isLoggedIn =
    localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Please Login First
      </h1>
    );
  }

  const user =
    JSON.parse(localStorage.getItem("user"));

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

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-lg">
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

      </div>
    </>
  );
}

export default Dashboard;