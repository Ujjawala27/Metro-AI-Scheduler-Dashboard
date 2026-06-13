import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title={title} />

        <main className="flex-1 p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
