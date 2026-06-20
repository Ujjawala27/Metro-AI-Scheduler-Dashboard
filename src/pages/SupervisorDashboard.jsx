import DashboardLayout from "../components/Layout/DashboardLayout";

import AnalyticsCard from "../components/Supervisor/AnalyticsCard";
import DeploymentTable from "../components/Supervisor/DeploymentTable";
import AlertsPanel from "../components/Supervisor/AlertsPanel";
import AIRanking from "../components/Supervisor/AIRanking";
import SimulationPanel from "../components/Supervisor/SimulationPanel";
import BrandingInsights from "../components/Supervisor/BrandingInsights";
import BlockedTrains from "../components/Supervisor/BlockedTrains";
import ShiftRequestsPanel from "../components/Supervisor/ShiftRequestsPanel";
import AuditLogPanel from "../components/common/AuditLogPanel";

import { useTrainContext } from "../context/TrainContext";

import { rankTrains, generateDeploymentPlan } from "../utils/aiScheduler";

import { isTrainDeployable } from "../utils/deploymentRules";

function SupervisorDashboard() {
  const { trains, maintenanceReports } = useTrainContext();
  // AI Ranking
  const rankedTrains = rankTrains(trains);

  // Deployment Plan with Blocking Rules
  const deploymentPlan = generateDeploymentPlan(trains, 25).filter(
    (train) => isTrainDeployable(train, maintenanceReports).deployable
  );

  // Analytics
  const availableCount = trains.filter((t) => t.status === "Available").length;

  const runningCount = trains.filter((t) => t.status === "Running").length;

  const maintenanceCount = trains.filter(
    (t) => t.status === "Maintenance"
  ).length;

  return (
    <DashboardLayout title="Supervisor Dashboard">
      {/* Analytics Cards */}
      <div id="analytics" className="grid md:grid-cols-4 gap-4 mb-6">
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
      <div id="deployment" className="grid lg:grid-cols-3 gap-6">
        {/* Deployment Plan */}
        <div className="lg:col-span-2">
          <DeploymentTable trains={deploymentPlan} />
          <div id="audit">
            <AuditLogPanel />
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <div id="alerts">
            <AlertsPanel />
          </div>
          <div id="ranking">
            <AIRanking trains={rankedTrains} />
          </div>
          <div id="shifts">
            <ShiftRequestsPanel />
          </div>
          <BlockedTrains />
        </div>
      </div>

      {/* Bottom Section */}
      <div id="simulation" className="grid lg:grid-cols-2 gap-6 mt-6">
        <SimulationPanel rankedTrains={rankedTrains} />

        <div id="branding">
          <BrandingInsights trains={trains} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SupervisorDashboard;
