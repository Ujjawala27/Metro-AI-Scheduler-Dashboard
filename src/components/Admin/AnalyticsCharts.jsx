import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { useTrainContext } from "../../context/TrainContext";

function AnalyticsCharts() {
  const { trains } = useTrainContext();

  const statusData = [
    {
      name: "Available",
      value: trains.filter((t) => t.status === "Available").length,
    },
    {
      name: "Running",
      value: trains.filter((t) => t.status === "Running").length,
    },
    {
      name: "Maintenance",
      value: trains.filter((t) => t.status === "Maintenance").length,
    },
  ];

  const mileageData = trains.slice(0, 10).map((train) => ({
    train: `T${train.id}`,
    mileage: train.mileage,
  }));

  const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Pie Chart */}

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Train Status Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={statusData} dataKey="value" outerRadius={100} label>
              {statusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Mileage Analysis</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mileageData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="train" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="mileage" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsCharts;
