import { useTrainContext } from "../../context/TrainContext";
import { isTrainDeployable } from "../../utils/deploymentRules";

function DashboardStats() {
  const { trains, maintenanceReports } = useTrainContext();

  const totalTrains = trains.length;

  const running = trains.filter((train) => train.status === "Running").length;

  const maintenance = trains.filter(
    (train) => train.status === "Maintenance"
  ).length;

  const deployable = trains.filter(
    (train) => isTrainDeployable(train, maintenanceReports).deployable
  ).length;

  const blocked = trains.length - deployable;

  const activeAlerts = maintenanceReports.filter(
    (report) => report.severity === "High"
  ).length;

  const cards = [
    {
      title: "Total Trains",
      value: totalTrains,
      color: "bg-blue-500",
    },
    {
      title: "Deployable",
      value: deployable,
      color: "bg-green-500",
    },
    {
      title: "Blocked",
      value: blocked,
      color: "bg-red-500",
    },
    {
      title: "Active Alerts",
      value: activeAlerts,
      color: "bg-yellow-500",
    },
    {
      title: "Running",
      value: running,
      color: "bg-emerald-500",
    },
    {
      title: "Maintenance",
      value: maintenance,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-5 shadow`}
        >
          <h3 className="text-sm font-medium">{card.title}</h3>

          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;
