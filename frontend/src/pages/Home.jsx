import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl font-bold text-blue-600">
          AI Resume Analyzer
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Upload your resume and receive instant AI-powered feedback,
          ATS scoring, skill gap analysis, and improvement suggestions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Analyze Resume
          </button>

          <button className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;