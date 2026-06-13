import { useTrainContext } from "../../context/TrainContext";
import { rankTrains } from "../../utils/aiScheduler";

function AIRecommendations() {
  const { trains } = useTrainContext();

  const topTrains = rankTrains(trains).slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>

      <div className="space-y-3">
        {topTrains.map((train) => (
          <div key={train.id} className="border rounded-lg p-3">
            <div className="flex justify-between">
              <span className="font-semibold">Train {train.id}</span>

              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {train.score}
              </span>
            </div>

            <div className="text-sm text-gray-500 mt-2">
              Mileage: {train.mileage}
            </div>

            <div className="text-sm text-gray-500">Status: {train.status}</div>

            <div className="text-sm text-gray-500">
              Cleaning: {train.cleaning}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIRecommendations;
