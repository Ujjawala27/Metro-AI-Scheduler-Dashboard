import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const [activeSection, setActiveSection] = useState("");

  const sectionsMap = {
    "/supervisor": [
      { label: "Analytics", id: "analytics", icon: "📊" },
      { label: "Deployment Plan", id: "deployment", icon: "🚆" },
      { label: "Audit Logs", id: "audit", icon: "🧾" },
      { label: "Alerts", id: "alerts", icon: "🚨" },
      { label: "AI Ranking", id: "ranking", icon: "🤖" },
      { label: "Shift Requests", id: "shifts", icon: "👨‍✈️" },
      { label: "Blocked Trains", id: "blocked", icon: "🛑" },
      { label: "Simulation", id: "simulation", icon: "⚙️" },
      { label: "Branding", id: "branding", icon: "🎯" },
    ],

    "/admin": [
      { label: "Stats", id: "stats", icon: "📊" },
      { label: "Analytics", id: "charts", icon: "📈" },
      { label: "Predictive Maintenance", id: "maintenance", icon: "🛠️" },
      { label: "Add Train", id: "add-train", icon: "🚂" },
      { label: "Fleet", id: "fleet", icon: "🚆" },
      { label: "User Management", id: "users", icon: "👥" },
      { label: "Maintenance Reports", id: "maintenance-reports", icon: "📋" },
      { label: "Notifications", id: "notifications", icon: "🔔" },
      { label: "AI Recommendations", id: "recommendations", icon: "🤖" },
      { label: "Audit Logs", id: "audit", icon: "🧾" },
    ],

    "/employee": [
      { label: "Shift Scheduling", id: "shifts", icon: "👨‍✈️" },
      { label: "Maintenance", id: "maintenance", icon: "🛠️" },
      { label: "Branding", id: "branding", icon: "🎨" },
    ],
  };

  const sections = sectionsMap[location.pathname] || [];

  const scrollToSection = (id) => {
    setActiveSection(id);

    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 120;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <aside
      className="
      w-72
      bg-slate-900
      text-white
      h-screen
      sticky
      top-0
      overflow-y-auto
      shadow-xl
    "
    >
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">🚇 Kochi Metro</h2>

        <p className="text-xs text-slate-400 mt-1">Smart Control Panel</p>
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              flex items-center gap-3
              w-full text-left
              px-4 py-3
              rounded-lg
              transition-all duration-200

              ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-md border-l-4 border-cyan-300"
                  : "hover:bg-slate-800 text-slate-200"
              }
            `}
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">System Status</div>

        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-sm text-green-400 font-medium">
            Operational
          </span>
        </div>

        <div className="bg-slate-800 rounded-lg p-3 mt-4">
          <span className="text-sm text-slate-300">Logged in as:</span>

          <div className="font-semibold capitalize mt-1">{user?.role}</div>
        </div>

        <p className="text-xs text-slate-500 mt-4 text-center">
          Metro AI Scheduler v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
