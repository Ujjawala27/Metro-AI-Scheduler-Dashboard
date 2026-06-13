import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();
  const { users } = useUserContext();

  const [role, setRole] = useState("employee");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role.toLowerCase() === role
    );

    if (!matchedUser) {
      alert("Invalid Credentials");
      return;
    }

    login(matchedUser);

    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Kochi Metro</h1>

          <p className="text-gray-500 mt-2">Smart Service Scheduler</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="employee">Employee</option>

              <option value="supervisor">Supervisor</option>

              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="mt-8 border-t pt-4 text-sm text-gray-500">
          <h3 className="font-semibold mb-2">Demo Credentials</h3>

          <p>
            <strong>Admin:</strong> admin / admin123
          </p>

          <p>
            <strong>Supervisor:</strong> supervisor / supervisor123
          </p>

          <p>
            <strong>Employee:</strong> employee / employee123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
