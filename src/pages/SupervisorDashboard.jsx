import DashboardLayout from "../components/Layout/DashboardLayout";

import AnalyticsCard from "../components/supervisor/AnalyticsCard";
import DeploymentTable from "../components/supervisor/DeploymentTable";
import AlertsPanel from "../components/supervisor/AlertsPanel";
import AIRanking from "../components/supervisor/AIRanking";
import SimulationPanel from "../components/supervisor/SimulationPanel";
import BrandingInsights from "../components/supervisor/BrandingInsights";

import { useTrainContext } from "../context/TrainContext";

import { rankTrains, generateDeploymentPlan } from "../utils/aiScheduler";

function SupervisorDashboard() {
  const { trains, maintenanceReports } = useTrainContext();

  // AI Ranking
  const rankedTrains = rankTrains(trains);

  // AI Deployment Plan
  const deploymentPlan = generateDeploymentPlan(trains, 25);

  // Analytics
  const availableCount = trains.filter((t) => t.status === "Available").length;

  const runningCount = trains.filter((t) => t.status === "Running").length;

  const maintenanceCount = trains.filter(
    (t) => t.status === "Maintenance"
  ).length;

  return (
    <DashboardLayout title="Supervisor Dashboard">
      {/* Analytics Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <AnalyticsCard
          title="Total Trains"
          value={trains.length}
          color="text-blue-600"
        />

        <AnalyticsCard
          title="Available"
          value={availableCount}
          color="text-green-600"
        />

        <AnalyticsCard
          title="Running"
          value={runningCount}
          color="text-yellow-600"
        />

        <AnalyticsCard
          title="Maintenance"
          value={maintenanceCount}
          color="text-red-600"
        />
      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Deployment Plan */}
        <div className="lg:col-span-2">
          <DeploymentTable trains={deploymentPlan} />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <AIRanking trains={rankedTrains} />

          <AlertsPanel maintenanceReports={maintenanceReports} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <SimulationPanel rankedTrains={rankedTrains} />

        <BrandingInsights trains={trains} />
      </div>
    </DashboardLayout>
  );
}

export default SupervisorDashboard;
