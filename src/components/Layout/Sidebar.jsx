import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold">Kochi Metro</h2>
      </div>

      <nav className="p-4 flex flex-col gap-3">
        <Link to="/employee" className="hover:bg-slate-800 p-3 rounded">
          Employee Dashboard
        </Link>

        <Link to="/supervisor" className="hover:bg-slate-800 p-3 rounded">
          Supervisor Dashboard
        </Link>

        <Link to="/admin" className="hover:bg-slate-800 p-3 rounded">
          Admin Dashboard
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
