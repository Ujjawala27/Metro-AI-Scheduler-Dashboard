import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title={title} />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
