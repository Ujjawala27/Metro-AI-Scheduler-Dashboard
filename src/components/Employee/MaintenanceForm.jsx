import { useTrainContext } from "../../context/TrainContext";
import { useAudit } from "../../context/AuditContext";

export default function MaintenanceForm() {
  const { maintenanceReports, addMaintenanceReport } = useTrainContext();

  const { addLog } = useAudit();

  const submitReport = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const report = {
      trainId: form.get("trainId"),
      issue: form.get("issue"),
      severity: form.get("severity"),
      timestamp: new Date().toLocaleString(),
    };

    addMaintenanceReport(report);

    addLog(
      `Employee submitted ${report.severity} severity report for Train ${report.trainId}`
    );

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

      <div className="mt-4 space-y-2">
        {maintenanceReports.map((r, index) => (
          <div key={index} className="border rounded p-2">
            <p>
              <strong>Train:</strong> {r.trainId}
            </p>

            <p>
              <strong>Issue:</strong> {r.issue}
            </p>

            <p>
              <strong>Severity:</strong> {r.severity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
