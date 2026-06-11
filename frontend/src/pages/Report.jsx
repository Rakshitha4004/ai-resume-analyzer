import Navbar from "../components/Navbar";

function Report() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis Report
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-blue-600">
            ATS Score: 78/100
          </h2>

          <div className="mt-6">

            <h3 className="font-bold text-xl">
              Strengths
            </h3>

            <ul className="list-disc ml-6">
              <li>Strong project experience</li>
              <li>Good technical skills</li>
            </ul>

          </div>

          <div className="mt-6">

            <h3 className="font-bold text-xl">
              Weaknesses
            </h3>

            <ul className="list-disc ml-6">
              <li>No measurable achievements</li>
              <li>Missing certifications</li>
            </ul>

          </div>

          <div className="mt-6">

            <h3 className="font-bold text-xl">
              Recommendations
            </h3>

            <ul className="list-disc ml-6">
              <li>Add project metrics</li>
              <li>Improve summary section</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default Report;