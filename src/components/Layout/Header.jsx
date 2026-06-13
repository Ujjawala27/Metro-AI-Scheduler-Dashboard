import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Header({ title }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="text-gray-500 text-sm">Logged in as: {user?.role}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
