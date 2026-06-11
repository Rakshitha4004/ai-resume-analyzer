import Navbar from "../components/Navbar";

function UploadResume() {
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
            className="w-full border p-3 rounded-lg"
          />

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Analyze Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadResume;