import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful!");

    console.log({
      email,
      password,
    });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">

          <h2 className="text-3xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </div>
      </div>
    </>
  );
}

export default Login;