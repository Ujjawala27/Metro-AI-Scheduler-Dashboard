import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const sectionsMap = {
    "/supervisor": [
      { label: "Analytics", id: "analytics", icon: "📊" },
      { label: "Deployment Plan", id: "deployment", icon: "🚆" },
      { label: "Blocked Trains", id: "blocked", icon: "🛑" },
      { label: "AI Ranking", id: "ranking", icon: "🤖" },
      { label: "Alerts", id: "alerts", icon: "🚨" },
      { label: "Audit Logs", id: "audit", icon: "🧾" },
      { label: "Simulation", id: "simulation", icon: "⚙️" },
      { label: "Branding", id: "branding", icon: "🎯" },
    ],

    "/admin": [
      { label: "Stats", id: "stats", icon: "📊" },
      { label: "Add Train", id: "add-train", icon: "🚂" },
      { label: "Fleet", id: "fleet", icon: "🚆" },
      { label: "User Management", id: "users", icon: "👥" },
      { label: "Analytics", id: "charts", icon: "📈" },
      { label: "Predictive Maintenance", id: "maintenance", icon: "🛠️" },
      { label: "Audit Logs", id: "audit", icon: "🧾" },
      { label: "Notifications", id: "notifications", icon: "🔔" },
      { label: "AI Recommendations", id: "recommendations", icon: "🤖" },
      { label: "Maintenance Reports", id: "maintenance-reports", icon: "🧾" },
    ],

    "/employee": [
      { label: "Shift Scheduling", id: "shifts", icon: "👨‍✈️" },
      { label: "Maintenance", id: "maintenance", icon: "🛠️" },
      { label: "Branding", id: "branding", icon: "🎨" },
    ],
  };

  const sections = sectionsMap[location.pathname] || [];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">🚇 Kochi Metro</h2>
        <p className="text-xs text-slate-400">Smart Control Panel</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="
              flex items-center gap-3 w-full text-left
              px-4 py-3 rounded-lg
              hover:bg-slate-800 transition
            "
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer Section */}
      <div className=" bottom-0 w-72 p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">System Status</div>

        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-green-400 font-medium">
            Operational
          </span>
        </div>
        <div className="bg-slate-900 rounded-lg p-3">
          <span className="text-sm text-slate-300">Logged in as: </span>
          <span className="font-semibold capitalize">{user?.role}</span>
        </div>
        <p className="text-xs text-slate-500 mt-3 text-center">
          Metro AI Scheduler v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
