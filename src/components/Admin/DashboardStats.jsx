import { useTrainContext } from "../../context/TrainContext";

function DashboardStats() {
  const { trains } = useTrainContext();

  const totalTrains = trains.length;

  const running = trains.filter((train) => train.status === "Running").length;

  const maintenance = trains.filter(
    (train) => train.status === "Maintenance"
  ).length;

  const branding = trains.filter((train) => train.branding !== "None").length;

  const cards = [
    {
      title: "Total Trains",
      value: totalTrains,
      color: "bg-blue-500",
    },
    {
      title: "Running",
      value: running,
      color: "bg-green-500",
    },
    {
      title: "Maintenance",
      value: maintenance,
      color: "bg-red-500",
    },
    {
      title: "Branding Active",
      value: branding,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
