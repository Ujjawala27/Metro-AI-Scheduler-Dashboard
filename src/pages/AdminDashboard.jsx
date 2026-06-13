import DashboardLayout from "../components/Layout/DashboardLayout";

import DashboardStats from "../components/admin/DashboardStats";
import AddTrainForm from "../components/admin/AddTrainForm";
import FleetTable from "../components/admin/FleetTable";
import UserManagement from "../components/admin/UserManagement";
import AnalyticsCharts from "../components/admin/AnalyticsCharts";
import MaintenanceExport from "../components/admin/MaintenanceExport";
import MetroAIAssistant from "../components/admin/MetroAIAssistant";
import AIRecommendations from "../components/admin/AIRecommendations";

import { useTrainContext } from "../context/TrainContext";

function AdminDashboard() {
  const { trains } = useTrainContext();

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* KPI Cards */}
        <DashboardStats trains={trains} />

        {/* Charts */}
        <AnalyticsCharts />

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <AddTrainForm />

            <FleetTable />

            <UserManagement />

            <MaintenanceExport />
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <AIRecommendations />

            <MetroAIAssistant />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
