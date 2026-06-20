import DashboardLayout from "../components/Layout/DashboardLayout";

import DashboardStats from "../components/Admin/DashboardStats";
import AddTrainForm from "../components/Admin/AddTrainForm";
import FleetTable from "../components/Admin/FleetTable";
import UserManagement from "../components/Admin/UserManagement";
import AnalyticsCharts from "../components/Admin/AnalyticsCharts";
import MaintenanceExport from "../components/Admin/MaintenanceExport";
import MetroAIAssistant from "../components/Admin/MetroAIAssistant";
import AIRecommendations from "../components/Admin/AIRecommendations";
import PredictiveMaintenance from "../components/Admin/PredictiveMaintenance";
import NotificationsCenter from "../components/Admin/NotificationsCenter";
import AuditLogPanel from "../components/common/AuditLogPanel";
import AlertsPanel from "../components/Supervisor/AlertsPanel";
import BrandingRequestsPanel from "../components/Admin/BrandingRequestsPanel";

import { useTrainContext } from "../context/TrainContext";

function AdminDashboard() {
  const { trains } = useTrainContext();

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div id="stats">
          <DashboardStats trains={trains} />
        </div>

        <AlertsPanel />
        <BrandingRequestsPanel />

        {/* Charts */}
        <div id="charts">
          <AnalyticsCharts />
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div id="maintenance">
              <PredictiveMaintenance />
            </div>

            <div id="add-train">
              <AddTrainForm />
            </div>

            <div id="fleet">
              <FleetTable />
            </div>

            <div id="users">
              <UserManagement />
            </div>
            <div id="maintenance-reports">
              <MaintenanceExport />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div id="notifications">
              <NotificationsCenter />
            </div>
            <div id="recommendations">
              <AIRecommendations />
            </div>
            <div id="audit">
              <AuditLogPanel />
            </div>
            <MetroAIAssistant />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
