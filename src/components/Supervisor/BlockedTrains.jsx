import { useTrainContext } from "../../context/TrainContext";
import { isTrainDeployable } from "../../utils/deploymentRules";

function BlockedTrains() {
  const { trains, maintenanceReports } = useTrainContext();

  const blockedTrains = trains.filter((train) => {
    const result = isTrainDeployable(train, maintenanceReports);

    return !result.deployable;
  });

  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div id="blocked">
        <h2 className="text-xl font-semibold mb-4">Blocked Trains</h2>
      </div>

      {blockedTrains.length === 0 ? (
        <p className="text-green-600">All trains are deployable</p>
      ) : (
        <div className="space-y-3">
          {blockedTrains.map((train) => {
            const result = isTrainDeployable(train, maintenanceReports);

            return (
              <div
                key={train.id}
                className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-3"
              >
                <p className="font-semibold">Train {train.id}</p>

                <p className="text-sm text-red-700">{result.reason}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BlockedTrains;
