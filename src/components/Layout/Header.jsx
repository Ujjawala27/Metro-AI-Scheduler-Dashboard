import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { FaTrain } from "react-icons/fa";

function Header({ title }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(
        new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "medium",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const roleColors = {
    admin: "bg-red-100 text-red-700",
    supervisor: "bg-yellow-100 text-yellow-700",
    employee: "bg-green-100 text-green-700",
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-md">
      <div className="px-8 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <h1 className="flex items-center gap-3">
            <FaTrain className="text-blue-600 text-3xl" />

            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Kochi Metro AI Scheduler
            </span>
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-slate-700 font-medium">{title}</span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                roleColors[user?.role] || "bg-gray-100 text-gray-700"
              }`}
            >
              {user?.role}
            </span>

            {/* Metro Status */}
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Operational
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Current Time
            </p>

            <p className="font-semibold text-slate-700">{currentTime}</p>
          </div>

          <button
            onClick={handleLogout}
            className="
              bg-gradient-to-r
              from-red-500
              to-red-600
              hover:from-red-600
              hover:to-red-700
              text-white
              px-5
              py-2.5
              rounded-xl
              font-medium
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
