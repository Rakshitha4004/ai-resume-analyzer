import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h2 className="text-2xl font-bold text-blue-600">
        AI Resume Analyzer
      </h2>

      <div className="space-x-6">
  <Link to="/">Home</Link>

  <Link to="/dashboard">Dashboard</Link>

  <Link to="/upload">Upload</Link>

  <Link to="/login">Login</Link>

  <Link to="/register">Register</Link>
</div>
    </nav>
  );
}

export default Navbar;