import { useTrainContext } from "../../context/TrainContext";
import { getHighRiskTrains } from "../../utils/predictiveMaintenance";

function PredictiveMaintenance() {
  const { trains } = useTrainContext();

  const riskyTrains = getHighRiskTrains(trains);

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">Predictive Maintenance</h2>

      <div className="space-y-3">
        {riskyTrains.slice(0, 10).map((train) => (
          <div key={train.id} className="border rounded-lg p-3">
            <div className="flex justify-between">
              <h3 className="font-semibold">Train {train.id}</h3>

              <span
                className={`font-bold ${
                  train.level === "High"
                    ? "text-red-600"
                    : train.level === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {train.level}
              </span>
            </div>

            <p>Mileage: {train.mileage}</p>

            <p>Risk Score: {train.risk}%</p>

            <p>Status: {train.status}</p>

            <p>Cleaning: {train.cleaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PredictiveMaintenance;
