import { useState } from "react";
import { useTrainContext } from "../../context/TrainContext";
import { useAudit } from "../../context/AuditContext";

function AddTrainForm() {
  const { trains, addTrain } = useTrainContext();
  const { addLog } = useAudit();
  const [mileage, setMileage] = useState("");

  const [status, setStatus] = useState("Available");

  const [branding, setBranding] = useState("None");

  const [cleaning, setCleaning] = useState("Done");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextId =
      trains.length > 0 ? Math.max(...trains.map((t) => t.id)) + 1 : 1;

    addTrain({
      id: nextId,
      mileage: Number(mileage),
      status,
      branding,
      cleaning,
      maintenance: status === "Maintenance",
      score: 100,
    });
    addLog(`Admin added Train ${nextId}`);

    setMileage("");
    setStatus("Available");
    setBranding("None");
    setCleaning("Done");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Add Train</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-3">
        <input
          type="number"
          placeholder="Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Available</option>
          <option>Running</option>
          <option>Maintenance</option>
        </select>

        <input
          type="text"
          placeholder="Branding"
          value={branding}
          onChange={(e) => setBranding(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={cleaning}
          onChange={(e) => setCleaning(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Done</option>
          <option>Pending</option>
        </select>

        <button className="bg-blue-600 text-white rounded">Add Train</button>
      </form>
    </div>
  );
}

export default AddTrainForm;
