import DashboardLayout from "../components/Layout/DashboardLayout";

import DashboardStats from "../components/admin/DashboardStats";
import AddTrainForm from "../components/admin/AddTrainForm";
import FleetTable from "../components/admin/FleetTable";
import UserManagement from "../components/admin/UserManagement";
import AnalyticsCharts from "../components/admin/AnalyticsCharts";
import MaintenanceExport from "../components/admin/MaintenanceExport";
import MetroAIAssistant from "../components/admin/MetroAIAssistant";
import AIRecommendations from "../components/admin/AIRecommendations";
import PredictiveMaintenance from "../components/admin/PredictiveMaintenance";
import NotificationsCenter from "../components/admin/NotificationsCenter";
import AuditLogPanel from "../components/common/AuditLogPanel";
import AlertsPanel from "../components/supervisor/AlertsPanel";
import BrandingRequestsPanel from "../components/admin/BrandingRequestsPanel";

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
            <PredictiveMaintenance />

            <AddTrainForm />

            <div id="fleet">
              <FleetTable />
            </div>

            <div id="users">
              <UserManagement />
            </div>

            <MaintenanceExport />
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <NotificationsCenter />
            <AIRecommendations />
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
