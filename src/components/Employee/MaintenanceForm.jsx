import { useState } from "react";

export default function MaintenanceForm() {
  const [reports, setReports] = useState([]);

  const submitReport = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const report = {
      trainId: form.get("trainId"),
      issue: form.get("issue"),
      severity: form.get("severity"),
    };

    setReports([...reports, report]);

    e.target.reset();
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Maintenance Reporting</h2>

      <form onSubmit={submitReport} className="space-y-3">
        <input
          name="trainId"
          placeholder="Train Number"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="issue"
          placeholder="Issue"
          className="w-full border p-2 rounded"
          required
        />

        <select name="severity" className="w-full border p-2 rounded">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="w-full bg-red-600 text-white p-2 rounded">
          Submit Report
        </button>
      </form>

      <div className="mt-4">
        {reports.map((r, index) => (
          <p key={index}>
            Train {r.trainId} - {r.issue}
          </p>
        ))}
      </div>
    </div>
  );
}
