import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function Login({ handleLogIn }) {
  const { data, setData } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(email, password);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <div className="w-1/3 bg-gray-900 text-gray-300 rounded-3xl p-10 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">
              Email ID
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-gray-400"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 rounded-3xl p-3 text-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
