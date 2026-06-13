import { useState } from "react";
import { useTrainContext } from "../../context/TrainContext";
import { rankTrains, generateDeploymentPlan } from "../../utils/aiScheduler";

function MetroAIAssistant() {
  const { trains } = useTrainContext();

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const query = question.toLowerCase().trim();

    const ranked = rankTrains(trains);

    // Best Train
    if (
      query.includes("best train") ||
      query.includes("highest score") ||
      query.includes("recommend train")
    ) {
      const best = ranked[0];

      setResponse(
        `Best Train: Train ${best.id}
        
AI Score: ${best.score}

Mileage: ${best.mileage}

Status: ${best.status}`
      );

      return;
    }

    // Deployment Plan
    if (
      query.includes("deployment") ||
      query.includes("schedule") ||
      query.includes("tomorrow")
    ) {
      const plan = generateDeploymentPlan(trains, 5);

      setResponse(
        `Recommended Deployment Plan:

${plan.map((train) => `Train ${train.id} (Score: ${train.score})`).join("\n")}`
      );

      return;
    }

    // Maintenance
    if (query.includes("maintenance") || query.includes("repair")) {
      const maintenanceTrains = trains.filter(
        (train) => train.status === "Maintenance"
      );

      if (maintenanceTrains.length === 0) {
        setResponse("No trains currently require maintenance.");
      } else {
        setResponse(
          `Maintenance Required:

${maintenanceTrains.map((train) => `Train ${train.id}`).join("\n")}`
        );
      }

      return;
    }

    // Available
    if (query.includes("available") || query.includes("ready")) {
      const available = trains.filter((train) => train.status === "Available");

      setResponse(`${available.length} trains are currently available.`);

      return;
    }

    // Running
    if (query.includes("running")) {
      const running = trains.filter((train) => train.status === "Running");

      setResponse(`${running.length} trains are currently running.`);

      return;
    }

    // Branding
    if (query.includes("branding") || query.includes("advertisement")) {
      const branded = trains.filter((train) => train.branding !== "None");

      setResponse(
        `${branded.length} trains currently have branding campaigns.`
      );

      return;
    }

    // Highest Mileage
    if (query.includes("highest mileage") || query.includes("most mileage")) {
      const highest = [...trains].sort((a, b) => b.mileage - a.mileage)[0];

      setResponse(
        `Train ${highest.id} has the highest mileage.

Mileage: ${highest.mileage}`
      );

      return;
    }

    // Lowest Mileage
    if (query.includes("lowest mileage")) {
      const lowest = [...trains].sort((a, b) => a.mileage - b.mileage)[0];

      setResponse(
        `Train ${lowest.id} has the lowest mileage.

Mileage: ${lowest.mileage}`
      );

      return;
    }

    // Fleet Size
    if (query.includes("fleet size") || query.includes("total trains")) {
      setResponse(`Current Fleet Size: ${trains.length} trains`);

      return;
    }

    // Help
    setResponse(
      `Try asking:

• Best train
• Deployment plan
• Maintenance status
• Available trains
• Running trains
• Branding analysis
• Highest mileage
• Lowest mileage
• Fleet size`
    );
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Metro AI Assistant</h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Metro AI..."
        className="w-full border rounded-lg p-3"
      />

      <button
        onClick={handleAsk}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Ask AI
      </button>

      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg whitespace-pre-line">
          {response}
        </div>
      )}
    </div>
  );
}

export default MetroAIAssistant;
