import { useState } from "react";

function SimulationPanel({ rankedTrains }) {
  const [removedTrain, setRemovedTrain] = useState("");

  const replacement =
    removedTrain &&
    rankedTrains.find((train) => train.id !== Number(removedTrain));

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Deployment Simulation</h2>

      <select
        value={removedTrain}
        onChange={(e) => setRemovedTrain(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="">Select Train</option>

        {rankedTrains.map((train) => (
          <option key={train.id} value={train.id}>
            Train {train.id}
          </option>
        ))}
      </select>

      {removedTrain && (
        <div className="space-y-2">
          <p>
            Removed: <strong>Train {removedTrain}</strong>
          </p>

          <p>
            Suggested Replacement: <strong>Train {replacement?.id}</strong>
          </p>

          <p className="text-green-600">AI Score: {replacement?.score}</p>
        </div>
      )}
    </div>
  );
}

export default SimulationPanel;
